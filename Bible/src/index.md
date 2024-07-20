---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "So, I was praying..."
  text: "Bible Resources by Greg Marine"
  tagline: Behind the curtain of a work in progress.
  actions:
    - theme: brand
      text: Lightscape
      link: /bibles/lightscape/genesis/01
    - theme: brand
      text: Unnamed
      link: /bible/john/01
---

<script setup>
import { ref, onMounted } from 'vue'
import { BibleClient } from '@gracious.tech/fetch-client'

const data = ref()

onMounted(async () => {
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

  data.value = book.get_chapter(1)
})
</script>

Above, you'll find my latest Bible resources. However, if this is your first time visiting, please [Read Me](read-me) first. It best explains what this site's purpose is. It will help guide you into how to make the best use of the resources contained in this site. It is my genuine hope and prayer these pages are as much a Blessing to you as they have been for me. A life with Jesus is an amazing journey!

<span class="fetch-bible" v-html="data"></span>