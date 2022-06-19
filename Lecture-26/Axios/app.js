

axios.get('https://cat-fact.herokuapp.com/facts/random')
    .then((res) => {
        console.log(res.data.text);
    })
    .catch((err) => {
        console.log(err);
    });