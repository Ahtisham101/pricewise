import * as cheerio from "cheerio"

export async function scrapeAmazonProduct(url: string) {
  if (!url) return

  const username = String(process.env.BRIGHT_DATA_USERNAME)
  const password = String(process.env.BRIGHT_DATA_PASSWORD)
  const body = {
    source: "amazon",
    url: url, // Pass the 'url' parameter to the function
  }

  try {
    const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
      },
    })

    const responseData = await response.json()
    const $ = cheerio.load(responseData.results[0].content)
    const title = $("#productTitle").text().trim()
    console.log({title})
  } catch (error) {
    console.error("Error:", error)
  }
}
