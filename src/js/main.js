import { renderMap, copyToClipboard, updateMapTheme } from './utils.js';

document.addEventListener("DOMContentLoaded", async () => {
  const ipDisplay = document.getElementById("ip-display");
  const btnCopy = document.getElementById("btn-copy-ip");
  const loader = document.getElementById("loader");

  let userIp = "";
  let loadedIpData = null;

  function renderIpData(data) {
    if (!data) return;
    
    userIp = data.ip;

    // 1. Display IP
    ipDisplay.textContent = userIp;

    const unknownVal = window.i18n.t("unknown_value");

    // 2. Populate details
    document.getElementById("val-city").textContent = data.city || window.i18n.t("unknown_city");
    document.getElementById("val-country").textContent = window.i18n.tCountry(data.country) || data.countryName || window.i18n.t("unknown_country");
    document.getElementById("val-country-code").textContent = data.country || unknownVal;
    document.getElementById("val-lat").textContent = data.latitude || unknownVal;
    document.getElementById("val-lng").textContent = data.longitude || unknownVal;
    document.getElementById("val-asn").textContent = data.asn ? `AS${data.asn}` : unknownVal;
    document.getElementById("val-org").textContent = data.asnOrg || unknownVal;
    document.getElementById("val-timezone").textContent = data.timezone || unknownVal;
    document.getElementById("val-colo").textContent = data.colo || window.i18n.t("unknown_colo");

    // Country Flag Badge
    if (data.country) {
      const countryBadge = document.getElementById("country-badge");
      // Convert country code to regional indicator flag emoji
      const flagEmoji = data.country
        .toUpperCase()
        .replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397));
      countryBadge.innerHTML = `<span class="flag-emoji">${flagEmoji}</span> <span>${data.country}</span>`;
    }

    // 3. Render map
    if (data.latitude && data.longitude) {
      const localizedCountry = window.i18n.tCountry(data.country) || data.countryName || "";
      const popupText = `${window.i18n.t("map_popup_myip")}: ${userIp}<br>${data.city || ""}${data.city && localizedCountry ? ", " : ""}${localizedCountry}`;
      renderMap("map", data.latitude, data.longitude, popupText);
    } else {
      document.getElementById("map").innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-muted);">${window.i18n.t("no_coords")}</div>`;
    }
  }

  function renderErrorState() {
    ipDisplay.textContent = window.i18n.t("failed_title");
    ipDisplay.style.color = "var(--error)";
    
    // Set descriptive errors
    const errorCells = ["val-city", "val-country", "val-country-code", "val-lat", "val-lng", "val-asn", "val-org", "val-timezone", "val-colo"];
    errorCells.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = window.i18n.t("failed_value");
    });
    
    document.getElementById("map").innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--error);">${window.i18n.t("failed_geo")}</div>`;
  }

  try {
    const response = await fetch("/api/myip");
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    
    const data = await response.json();
    loadedIpData = data;
    renderIpData(data);

    if (data && data.country) {
      sessionStorage.setItem("user_country", data.country);
      if (window.i18n && typeof window.i18n.initVpnAd === "function") {
        window.i18n.initVpnAd();
      }
    }

  } catch (error) {
    console.error("Error loading IP data:", error);
    renderErrorState();
  } finally {
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 300);
    }
  }

  // Copy IP Event
  btnCopy.addEventListener("click", () => {
    if (userIp) {
      copyToClipboard(userIp);
    }
  });

  // Listen to theme change to update Leaflet tiles
  window.addEventListener("theme-change", () => {
    updateMapTheme();
  });

  // Listen to language change to re-render dynamic content
  window.addEventListener("lang-change", () => {
    if (loadedIpData) {
      renderIpData(loadedIpData);
    } else {
      renderErrorState();
    }
  });
});
