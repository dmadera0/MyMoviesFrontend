fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => createUserOptions(users))

    function createUserOptions(users) {
        const userField = document.querySelector('#username-field')

        users.map(user => {
            const userOption = document.createElement('option')

            userOption.value = user.id
            userOption.textContent = user.name

            userField.appendChild(userOption)
        })
    }

