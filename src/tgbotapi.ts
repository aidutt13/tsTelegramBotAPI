import Api from './api';

const c: Api = new Api('1450394999:AAGrfHZeQoMzyI5srk5j8UOA64WMred3nIM');

const response = c.getMe();

response.then(data => {
    console.log(data.data);
})

