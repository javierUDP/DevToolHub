function loadTool(toolName) {
    // Carga dinámica de la herramienta (ej: readme-generator.html)
    window.location.href = `tools/${toolName}.html`;
}

// Ejemplo: Contador de visitas (para mostrar métricas a anunciantes)
if (typeof localStorage !== 'undefined') {
    let visits = localStorage.getItem('pageVisits') || 0;
    visits++;
    localStorage.setItem('pageVisits', visits);
    console.log(`Visitas totales: ${visits}`);
}