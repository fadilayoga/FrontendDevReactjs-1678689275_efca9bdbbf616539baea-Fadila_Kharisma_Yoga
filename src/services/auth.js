const auth = async ({ username, password }) => {
  try {
    let res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    })

    if (res.status === 200) {
      const data = await res.json();          
      return data
    }
    return false
  } catch (error) {
    console.log(error)
  }
}

export default auth
