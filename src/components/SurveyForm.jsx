import React, { useState, useEffect } from "react";
import {
  LinearProgress,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Modal,
  Box,
} from "@mui/material";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { LiaCalendar } from "react-icons/lia";

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    Satisfaction: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const filledFields = Object.values(formData).filter(
      (value) => value.trim() !== ""
    ).length;
    setProgress((filledFields / Object.keys(formData).length) * 100);
  }, [formData]);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    } else if (isNaN(formData.age) || Number(formData.age) <= 0) {
      newErrors.age = "Enter a valid age";
    }
    if (!formData.Satisfaction.trim())
      newErrors.Satisfaction = "Please select an option";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", age: "", Satisfaction: "" });
        setErrors({});
        setProgress(0);
      }, 5000);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f8ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Card sx={{ maxWidth: 400, padding: 3, borderRadius: 3, width: "90%" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Survey Form
          </Typography>

          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ marginBottom: 2 }}
          />

          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaUser style={{ marginRight: 10, color: "blue" }} />
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                error={!!errors.name}
                helperText={errors.name}
                InputProps={{
                  sx: {
                    backgroundColor: "#e0f7fa",
                    borderRadius: 1,
                  },
                }}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <FaEnvelope style={{ marginRight: 10, color: "blue" }} />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                  sx: {
                    backgroundColor: "#e0f7fa",
                    borderRadius: 1,
                  },
                }}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <LiaCalendar
                size={24}
                style={{ marginRight: 10, color: "blue", alignSelf: "center" }}
              />
              <TextField
                label="Age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                fullWidth
                margin="normal"
                error={!!errors.age}
                helperText={errors.age}
                InputProps={{
                  sx: {
                    backgroundColor: "#e0f7fa",
                    borderRadius: 1,
                  },
                }}
              />
            </div>

            <FormControl
              component="fieldset"
              sx={{ marginTop: 2 }}
              error={!!errors.Satisfaction}
            >
              <FormLabel component="legend">Satisfaction Level</FormLabel>
              <RadioGroup
                name="Satisfaction"
                value={formData.Satisfaction}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Very satisfied"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="Satisfied"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label="Neutral"
                />
                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label="Dissatisfied"
                />
              </RadioGroup>
              {errors.Satisfaction && (
                <Typography color="error">{errors.Satisfaction}</Typography>
              )}
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>

      <Modal
        open={submitted}
        onClose={() => setSubmitted(false)}
        aria-labelledby="success-modal"
        aria-describedby="success-message"
      >
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "skyblue",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <Typography
            id="success-modal"
            variant="h4"
            color="green"
            fontWeight="bold"
          >
            ¡Formulario enviado con éxito!
          </Typography>
          <Typography id="success-message" variant="body1" mt={2}>
            Gracias por completar la encuesta.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default SurveyForm;
