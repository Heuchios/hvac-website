const quotes = [
  {
    quoteNumber: "5318008",
    customer: "Vanscory School",
    date: "2026-03-18",
    pdf: "quotes/5318008-v2.pdf?v=2"
  },
  {
    quoteNumber: "Q-1001",
    customer: "John Smith",
    date: "2026-03-15",
    pdf: "quotes/Q-1001.pdf"
  },
  {
    quoteNumber: "Q-1002",
    customer: "ABC Grocery Store",
    date: "2026-03-16",
    pdf: "quotes/Q-1002.pdf"
  }
];

function displayQuote(foundQuote) {
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = `
    <h3>Quote Found</h3>
    <p><strong>Quote Number:</strong> ${foundQuote.quoteNumber}</p>
    <p><strong>Customer:</strong> ${foundQuote.customer}</p>
    <p><strong>Date:</strong> ${foundQuote.date}</p>
    <iframe src="${foundQuote.pdf}"></iframe>
  `;
}

function searchQuote() {
  const input = document.getElementById("quoteNumber").value.trim().toUpperCase();
  const resultDiv = document.getElementById("result");

  if (!input) {
    resultDiv.innerHTML = `<p class="not-found">Please enter a quote number.</p>`;
    return;
  }

  const foundQuote = quotes.find(
    quote => quote.quoteNumber.toUpperCase() === input
  );

  if (foundQuote) {
    displayQuote(foundQuote);
  } else {
    resultDiv.innerHTML = `<p class="not-found">Quote not found.</p>`;
  }
}

window.addEventListener("load", () => {
  const params = new URLSearchParams(window.location.search);
  const quoteParam = params.get("quote");

  if (quoteParam) {
    const foundQuote = quotes.find(
      quote => quote.quoteNumber.toUpperCase() === quoteParam.toUpperCase()
    );

    if (foundQuote) {
      document.getElementById("quoteNumber").value = foundQuote.quoteNumber;
      displayQuote(foundQuote);
    }
  }
});