import axios from '@/utils/axios'

export async function fetchNotes () {
  try {
    const res = await axios.get('/notes')
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error('Error fetching notes')
  }
}
