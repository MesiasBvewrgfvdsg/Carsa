import React, { useState } from "react";
import { Button } from "@mui/material";
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, Container, Card, CardContent } from "@mui/material";

const DashboardPage = () => {
  const [activeApi, setActiveApi] = useState(0);

  // Estados para manejar la visibilidad de los resúmenes y recomendaciones
  const [showSummary, setShowSummary] = useState([false, false, false, false]);
  const [showRecommendations, setShowRecommendations] = useState([false, false, false, false]);

  // Resúmenes específicos por API
  const [apiSummaries, setApiSummaries] = useState([
    `<br />- La región Este lidera en ventas, seguida por el Norte. Las ventas en línea superan a las de tiendas físicas en todas las regiones. <br />- Las ventas están casi equilibradas entre el canal en línea (50.4%) y tienda física (49.6%).`,
    `<br />- Las fluctuaciones en entradas y salidas indican demanda variable. <br />- Hay desigualdades en el stock de productos.`,
    `<br />- La mayoría de las devoluciones ocurren en envíos aéreos, especialmente aquellos que están retrasados. <br />- Hay variaciones mensuales en los tiempos de envío, con ciertos meses mostrando tiempos promedio más altos.`,
    `<br />- Hay fluctuaciones en el número de reclamos y en los niveles de satisfacción a lo largo del año. Los meses con más reclamos tienden a tener niveles de satisfacción más bajos. <br />- El tiempo de resolución varía significativamente entre los distintos tipos de reclamos y canales de atención, con “Producto defectuoso” y “Mala atención” siendo los más problemáticos.`,
  ]);

  // Recomendaciones específicas por API
  const [apiRecommendations, setApiRecommendations] = useState([
    [
      "- Potenciar aún más las ventas en línea con campañas dirigidas, especialmente en la región Este.",
      "- Mantener la inversión en ambos canales para seguir aprovechando su rendimiento casi equitativo.",
    ],
    [
      "- Implementar gestión basada en datos históricos para evitar excesos y deficiencias.",
      "- Planificar campañas durante los meses de menor venta para mantener ingresos constantes y reducir el exceso de inventario.",
    ],
    [
      "- Implementar mejoras en la cadena de suministro y procesos de entrega aérea para reducir retrasos y el número de devoluciones.",
      "- Establecer un sistema de monitoreo continuo para identificar los meses con mayores tiempos de envío y tomar medidas correctivas específicas para esos periodos.",
    ],
    [
      "- Capacitar al personal de atención al cliente para manejar los reclamos de manera más eficiente y reducir los tiempos de resolución, enfocándose en los reclamos por “Producto defectuoso” y “Mala atención”.",
      "- Revisar y optimizar los canales de atención más utilizados, como el teléfono y el email, para mejorar la experiencia del cliente y aumentar la satisfacción.",
    ],
  ]);

  // Función para generar el resumen analítico por API
  const handleGenerateReport = (apiIndex) => {
    const newShowSummary = [...showSummary];
    newShowSummary[apiIndex] = true; // Establece que el resumen se muestre
    setShowSummary(newShowSummary);
  };

  // Función para generar recomendaciones específicas por API
  const handleGenerateRecommendations = (apiIndex) => {
    const newShowRecommendations = [...showRecommendations];
    newShowRecommendations[apiIndex] = true; // Establece que las recomendaciones se muestren
    setShowRecommendations(newShowRecommendations);
  };

  return (
    <Box>
      {/* Encabezado */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            CARSA
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Navegación entre APIs */}
      <Tabs
        value={activeApi}
        onChange={(e, newValue) => setActiveApi(newValue)}
        centered
        textColor="primary"
        indicatorColor="primary"
        sx={{ marginTop: 2 }}
      >
        <Tab label="VENTAS" />
        <Tab label="INVENTARIO" />
        <Tab label="LOGÍSTICA" />
        <Tab label="ATENCIÓN AL CLIENTE" />
      </Tabs>

      {/* Contenedor de los Iframes */}
      <Container maxWidth="lg" sx={{ marginTop: 4, textAlign: "center" }}>
        {/* Mostrar gráficos según la API seleccionada */}
        <Box sx={{ display: activeApi === 0 ? "block" : "none" }}>
          <iframe
            title="Reporte API 1"
            width="100%"
            height="500px"
            src="https://app.powerbi.com/view?r=eyJrIjoiM2I3YThkNDQtZWE3Yi00ZDZiLTllYzYtYmI1ZjA0OTI0NDQwIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>

        <Box sx={{ display: activeApi === 1 ? "block" : "none" }}>
          <iframe
            title="Reporte API 2"
            width="100%"
            height="500px"
            src="https://app.powerbi.com/view?r=eyJrIjoiNGM5NzViM2QtYzYzMC00YTY1LTk1MjYtY2FkNGQ1MTljNjIxIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>

        <Box sx={{ display: activeApi === 2 ? "block" : "none" }}>
          <iframe
            title="Reporte API 3"
            width="100%"
            height="500px"
            src="https://app.powerbi.com/view?r=eyJrIjoiNTNkOGRmMzAtYzEzMS00OTIxLWI3N2ItNWM0MDU5MTI1ODZlIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>

        <Box sx={{ display: activeApi === 3 ? "block" : "none" }}>
          <iframe
            title="Reporte API 4"
            width="100%"
            height="500px"
            src="https://app.powerbi.com/view?r=eyJrIjoiN2Y1M2I4YzYtMGZkYS00ZDU4LWIyZjktNDY0ZWI5MTBkOTQ2IiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>

        {/* Sección de Análisis y Decisiones */}
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h5" gutterBottom>
            Análisis y Decisiones sobre el desempeño operativo de la empresa
          </Typography>

          {/* Tarjetas para Resumen y Recomendaciones */}
          <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: 4 }}>
            {/* Tarjeta de Resumen */}
            <Card sx={{ width: "45%" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Resumen Analítico
                </Typography>
                {/* Mostrar solo si se ha clickeado el botón */}
                {showSummary[activeApi] ? (
                  <Typography
                    variant="body1"
                    dangerouslySetInnerHTML={{
                      __html: apiSummaries[activeApi],  // Esto permite interpretar los saltos de línea
                    }}
                  />
                ) : (
                  <Typography>Haz clic para generar el resumen analítico de este dashboard.</Typography>
                )}
                <Box sx={{ textAlign: "center", marginTop: 2 }}>
                  <Button
                    variant="contained"
                    onClick={() => handleGenerateReport(activeApi)}
                  >
                    Generar Resumen
                  </Button>
                </Box>
              </CardContent>
            </Card>

            {/* Tarjeta de Recomendaciones */}
            <Card sx={{ width: "45%" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Recomendaciones
                </Typography>
                {/* Mostrar solo si se ha clickeado el botón */}
                {showRecommendations[activeApi] ? (
                  apiRecommendations[activeApi].map((rec, index) => (
                    <Typography key={index} gutterBottom>
                      {rec}
                    </Typography>
                  ))
                ) : (
                  <Typography>Haz clic para generar las recomendaciones de este dashboard.</Typography>
                )}
                <Box sx={{ textAlign: "center", marginTop: 2 }}>
                  <Button
                    variant="contained"
                    onClick={() => handleGenerateRecommendations(activeApi)}
                  >
                    Generar Recomendaciones
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DashboardPage;
