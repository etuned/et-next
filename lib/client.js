// client.js
import client from '@sanity/client'

export const sanity = client({
  projectId: 'ua3ln0yt', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
});
