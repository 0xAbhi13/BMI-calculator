/* ============================================================
 * BMI Calculator — Veda Technology Internship Task 6
 * HTML5 + CSS3 + Vanilla JavaScript. No dependencies.
 *
 * Pure calculation/validation logic is kept separate from DOM
 * manipulation so it can be unit-tested. DOM wiring only runs
 * when `document` exists (safe under Node test harnesses).
 * ============================================================ */

"use strict";

/* ---------- Pure BMI logic (no DOM) ---------- */

/** Sensible input limits that reject unrealistic measurements. */
var HEIGHT_MIN_CM = 50;
var HEIGHT_MAX_CM = 300;
var WEIGHT_MIN_KG = 2;
var WEIGHT_MAX_KG = 500;

/** Category boundaries for standard adult BMI ranges. */
var UNDERWEIGHT_MAX = 18.5;
var NORMAL_MAX = 25;
var OVERWEIGHT_MAX = 30;

/** BMI scale range shown by the visual indicator. */
var SCALE_MIN = 14;
var SCALE_MAX = 40;

var CATEGORY_INFO = {
  underweight: {
    key: "underweight",
    name: "Underweight",
    badgeClass: "badge-under",
    explanation: "Your BMI is below the typical adult range. Consider speaking with a healthcare professional about healthy ways to reach a balanced weight."
  },
  normal: {
    key: "normal",
    name: "Normal weight",
    badgeClass: "badge-normal",
    explanation: "Your BMI is within the typical adult range. Keep up balanced nutrition and regular physical activity."
  },
  overweight: {
    key: "overweight",
    name: "Overweight",
    badgeClass: "badge-over",
    explanation: "Your BMI is above the typical adult range. Small, steady lifestyle changes can help — consider professional advice for a plan that suits you."
  },
  obesity: {
    key: "obesity",
    name: "Obesity",
    badgeClass: "badge-obese",
    explanation: "Your BMI is well above the typical adult range. Consider speaking with a healthcare professional for personalised guidance."
  }
};

/**
 * Calculate BMI from height (cm) and weight (kg).
 * Converts centimetres to metres, then applies:
 *   BMI = weight / (heightM * heightM)
 */
function calculateBMI(heightCm, weightKg) {
  var heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}

/**
 * Format a BMI value for display: rounded to exactly 2 decimals.
 * Returns null for non-finite values so callers never render
 * NaN or Infinity.
 */
function formatBMI(value) {
  if (typeof value !== "number" || !isFinite(value)) {
    return null;
  }
  return value.toFixed(2);
}

/**
 * Classify a BMI value into a standard adult weight category.
 * Uses the full-precision value (not the rounded display string)
 * so boundary values such as exactly 18.5, 25, and 30 land in the
 * correct category.
 */
function classifyBMI(bmi) {
  if (bmi < UNDERWEIGHT_MAX) {
    return CATEGORY_INFO.underweight;
  }
  if (bmi < NORMAL_MAX) {
    return CATEGORY_INFO.normal;
  }
  if (bmi < OVERWEIGHT_MAX) {
    return CATEGORY_INFO.overweight;
  }
  return CATEGORY_INFO.obesity;
}

/**
 * Validate one raw measurement string. Returns one of:
 *   { status: "empty" }            — nothing typed yet
 *   { status: "error", message }   — invalid, show message
 *   { status: "ok", value }        — finite number inside limits
 *
 * Rejects: empty input, non-numeric text (abc, NaN, Infinity),
 * zero/negative values, and values outside the sensible limits.
 */
function validateMeasurement(rawText, options) {
  var text = String(rawText == null ? "" : rawText).trim();
  var label = options.label;
  var min = options.min;
  var max = options.max;
  var unit = options.unit;

  if (text === "") {
    return { status: "empty", message: "Please enter your " + label + "." };
  }

  // Accept an optional sign, digits with an optional decimal part, and an
  // optional exponent (e.g. "170", "65.5", "+1.7e2"). Anything else —
  // letters, symbols, "NaN", "Infinity" — is invalid.
  if (!/^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(text)) {
    return { status: "error", message: "Please enter a valid number for " + label + "." };
  }

  var value = Number(text);
  if (!isFinite(value)) {
    return { status: "error", message: "Please enter a finite number for " + label + "." };
  }

  if (value <= 0) {
    return { status: "error", message: label.charAt(0).toUpperCase() + label.slice(1) + " must be greater than zero." };
  }

  if (value < min || value > max) {
    return {
      status: "error",
      message: "Please enter a realistic " + label + " between " + min + " and " + max + " " + unit + "."
    };
  }

  return { status: "ok", value: value };
}

/** Validate the height field specifically. */
function validateHeight(rawText) {
  return validateMeasurement(rawText, {
    label: "height",
    min: HEIGHT_MIN_CM,
    max: HEIGHT_MAX_CM,
    unit: "cm"
  });
}

/** Validate the weight field specifically. */
function validateWeight(rawText) {
  return validateMeasurement(rawText, {
    label: "weight",
    min: WEIGHT_MIN_KG,
    max: WEIGHT_MAX_KG,
    unit: "kg"
  });
}

/**
 * Healthy weight range (kg) for a given height, spanning BMI 18.5–24.9.
 * Rendered with one decimal place for readability.
 */
function healthyWeightRange(heightCm) {
  var heightM = heightCm / 100;
  var low = UNDERWEIGHT_MAX * heightM * heightM;
  var high = 24.9 * heightM * heightM;
  return { low: low, high: high };
}

/**
 * Marker position (0–100 %) on the visual BMI scale.
 * Clamps out-of-range values to the scale ends.
 */
function scalePosition(bmi) {
  var clamped = Math.min(Math.max(bmi, SCALE_MIN), SCALE_MAX);
  return ((clamped - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100;
}

/* Export pure functions for Node-based testing (ignored in browsers). */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    HEIGHT_MIN_CM: HEIGHT_MIN_CM,
    HEIGHT_MAX_CM: HEIGHT_MAX_CM,
    WEIGHT_MIN_KG: WEIGHT_MIN_KG,
    WEIGHT_MAX_KG: WEIGHT_MAX_KG,
    CATEGORY_INFO: CATEGORY_INFO,
    calculateBMI: calculateBMI,
    formatBMI: formatBMI,
    classifyBMI: classifyBMI,
    validateMeasurement: validateMeasurement,
    validateHeight: validateHeight,
    validateWeight: validateWeight,
    healthyWeightRange: healthyWeightRange,
    scalePosition: scalePosition
  };
}

/* ---------- DOM wiring (browsers only) ---------- */

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", initCalculator);

  function initCalculator() {
    var form = document.getElementById("bmiForm");
    var heightInput = document.getElementById("heightInput");
    var weightInput = document.getElementById("weightInput");
    var heightError = document.getElementById("heightError");
    var weightError = document.getElementById("weightError");
    var resultEmpty = document.getElementById("resultEmpty");
    var resultContent = document.getElementById("resultContent");
    var bmiValue = document.getElementById("bmiValue");
    var bmiBadge = document.getElementById("bmiBadge");
    var bmiExplanation = document.getElementById("bmiExplanation");
    var healthyRangeEl = document.getElementById("healthyRange");
    var scaleMarker = document.getElementById("scaleMarker");
    var scaleImg = document.getElementById("bmiScaleImg");
    var resetBtn = document.getElementById("resetBtn");

    function showFieldError(input, errorEl, message) {
      errorEl.textContent = message;
      errorEl.hidden = false;
      input.setAttribute("aria-invalid", "true");
    }

    function clearFieldError(input, errorEl) {
      errorEl.textContent = "";
      errorEl.hidden = true;
      input.removeAttribute("aria-invalid");
    }

    function showEmptyState() {
      resultEmpty.hidden = false;
      resultContent.hidden = true;
    }

    function showResult(bmi, heightCm) {
      var category = classifyBMI(bmi);
      var formatted = formatBMI(bmi);
      var range = healthyWeightRange(heightCm);

      // formatBMI only returns null for non-finite input, which validation
      // already excludes — this guard simply prevents a misleading render.
      if (formatted === null) {
        showEmptyState();
        return;
      }

      bmiValue.textContent = formatted;
      bmiBadge.textContent = category.name;
      bmiBadge.className = "badge " + category.badgeClass;
      bmiExplanation.textContent = category.explanation;
      healthyRangeEl.textContent =
        "Healthy weight for " + String(heightInput.value).trim() + " cm: " +
        range.low.toFixed(1) + "–" + range.high.toFixed(1) + " kg (BMI 18.5–24.9).";
      scaleMarker.style.left = scalePosition(bmi).toFixed(1) + "%";
      scaleImg.setAttribute(
        "aria-label",
        "BMI scale: your BMI of " + formatted + " falls in the " + category.name + " range."
      );

      resultEmpty.hidden = true;
      resultContent.hidden = false;
    }

    /** Validate both fields; on success render the result. */
    function handleCalculate() {
      var heightResult = validateHeight(heightInput.value);
      var weightResult = validateWeight(weightInput.value);
      var firstInvalid = null;

      if (heightResult.status === "ok") {
        clearFieldError(heightInput, heightError);
      } else {
        showFieldError(heightInput, heightError, heightResult.message);
        firstInvalid = firstInvalid || heightInput;
      }

      if (weightResult.status === "ok") {
        clearFieldError(weightInput, weightError);
      } else {
        showFieldError(weightInput, weightError, weightResult.message);
        firstInvalid = firstInvalid || weightInput;
      }

      if (firstInvalid !== null) {
        showEmptyState();
        firstInvalid.focus();
        return;
      }

      showResult(
        calculateBMI(heightResult.value, weightResult.value),
        heightResult.value
      );
    }

    function handleReset() {
      heightInput.value = "";
      weightInput.value = "";
      clearFieldError(heightInput, heightError);
      clearFieldError(weightInput, weightError);
      showEmptyState();
      heightInput.focus();
    }

    // ----- Event listeners (no inline handlers) -----
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // stay on the page; Enter calculates
      handleCalculate();
    });

    // Clear a field's error as soon as the user fixes it.
    heightInput.addEventListener("input", function () {
      if (heightError.hidden === false) {
        clearFieldError(heightInput, heightError);
      }
    });

    weightInput.addEventListener("input", function () {
      if (weightError.hidden === false) {
        clearFieldError(weightInput, weightError);
      }
    });

    resetBtn.addEventListener("click", handleReset);

    // Initial render: helpful empty state, no misleading numbers.
    showEmptyState();
  }
}
