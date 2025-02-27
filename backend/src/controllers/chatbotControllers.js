import scrapeDocumentation from "../utils/apiFetcher.js";

const CDP_URLS = {

};

export const getChatbotResponse = async (req, res) => {
  const { question } = req.body;
  if (!question) return res.status(400).json({ error: "Question is required" });

  let responses = {};
  for (let [cdp, url] of Object.entries(CDP_URLS)) {
    responses[cdp] = await scrapeDocumentation(url, question);
  }

  res.json(responses);
};
