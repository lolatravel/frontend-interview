export const tripsData = fetch('https://s3.amazonaws.com/frontend-candidate-homework.lola.co/trips.json')
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        throw new Error('reponse not ok');
    })
    .then(data => {
        return data;
    });
