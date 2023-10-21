"use server"

import axios from 'axios';
import * as cheerio from 'cheerio';
import { extractCurrency, extractDescription, extractPrice } from '../utils';
import { scrapeAmazonProduct } from '../scraper';

export async function scrapeAndStoreProduct(productUrl: string) {
  if(!productUrl) return;


  try {
    const scrapedProduct= await scrapeAmazonProduct(productUrl)
    console.log("scrapedProduct",scrapedProduct)

  } catch (error: any) {
    console.log(error);
  }
}