class FetchMasters {
    constructor() {
        this.companyId = window.yClientsId;
        this.api = 'd8m22a27wuwur3yfa474';
        this.addEvents();
    }

    addEvents() {
        window.onload = () => {
            const id = window["yClientsId"];
            const url = `https://api.yclients.com/api/v1/comments/staff/${id}`;

            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Authorization', `${this.api}`);
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4) {
                    const data = JSON.parse(xhr.responseText);
                    console.log(data);
                }
            }
            xhr.send();
        }
    }
}

export default FetchMasters;