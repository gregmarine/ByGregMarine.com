import { BibleClient } from '@gracious.tech/fetch-client'

export default {
  async load(): Promise<string> {
    // Init client
    const client = new BibleClient()

    // Fetch the collection's meta data
    const collection = await client.fetch_collection()

    // Get what translations are available
    // const translations = collection.get_translations()

    // Get the id of the first translation available
    const translation_id = 'eng_bsb' // translations[0].id

    // Get what books are available for the translation
    // (may be whole Bible or may only be e.g. NT)
    const books = collection.get_books(translation_id)

    // Fetch the contents of the first book
    const book = await collection.fetch_book(translation_id, books[0].id)

    return book.get_chapter(1)
  }
}