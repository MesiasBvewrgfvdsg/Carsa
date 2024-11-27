import React from "react";
import { Box, Typography, Button, Container, Grid, Card, CardContent } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      {/* Banner de Bienvenida con Imagen de Fondo */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: 'url("https://media.istockphoto.com/id/1488400464/es/foto/empresario-evaluando-en-l%C3%ADnea-con-marca-de-verificaci%C3%B3n-en-pantalla-virtual-encuesta-de.jpg?s=612x612&w=0&k=20&c=PKFD4Ymatciusp71iKSiEJapELwiIGfaXnJGVRDH4FE=")', // Cambia esta URL por tu imagen
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textAlign: "center",
          padding: "100px 0",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Oscurece la imagen
            zIndex: 1,
          },
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ position: "relative", zIndex: 2 }}>
          Bienvenido al Dashboard de Carsa
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ position: "relative", zIndex: 2 }}>
          Explora los datos de forma interactiva y toma decisiones estratégicas.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 3, position: "relative", zIndex: 2 }}
          onClick={() => window.location.href = "/dashboard"}
        >
          Comenzar a Analizar
        </Button>
      </Box>

      {/* Características */}
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          ¿Qué puedes hacer aquí?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Análisis Interactivo
                </Typography>
                <Typography>
                  Usa gráficos dinámicos para explorar tus datos y descubrir patrones.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Toma de Decisiones
                </Typography>
                <Typography>
                  Genera recomendaciones automáticas basadas en tus métricas clave.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Exporta Resultados
                </Typography>
                <Typography>
                  Descarga reportes y comparte tus análisis fácilmente.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Pie de Página */}

    </Box>
  );
};

export default HomePage;
