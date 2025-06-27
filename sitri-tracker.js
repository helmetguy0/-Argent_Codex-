// Sitri Tracker Logic
let curseLevel = 32;

function renderSitriTracker() {
  const tracker = document.getElementById("sitriTracker");
  const alert = curseLevel >= 85 ? "⚠️ CRITICAL RESONANCE" :
                curseLevel >= 60 ? "⛓️ Curse Stirring" :
                "🕯️ Dormant";

  tracker.innerHTML = `
    <h3>Curse Resonance: ${curseLevel}%</h3>
    <p>Status: ${alert}</p>
    <button onclick="adjustCurse(5)">Increase</button>
    <button onclick="adjustCurse(-5)">Cleanse</button>
  `;
  codexInterface.notify("sitriUpdate", { curseLevel, status: alert });
}

function adjustCurse(amount) {
  curseLevel = Math.max(0, Math.min(100, curseLevel + amount));
  renderSitriTracker();
}

renderSitriTracker();