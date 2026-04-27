cat > app.js << 'EOF'
const API_BASE = "https://2xf2izsgwg.execute-api.us-east-2.amazonaws.com";

const btn = document.getElementById("test-api");
const result = document.getElementById("api-result");

btn.addEventListener("click", async () => {
  result.style.display = "block";
  result.textContent = "Connecting to AWS...";
  try {
    const res = await fetch(`${API_BASE}/hello`);
    const text = await res.text();
    result.textContent = "AWS says: " + text;
  } catch (e) {
    result.textContent = "Could not reach API. Check CORS on API Gateway.";
  }
});
EOF