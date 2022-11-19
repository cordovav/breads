const React = require('react')
const Default = require('./layouts/Default')

function Error (){
    return (
        <Default>
            <h1>ERROR 404</h1>
            <h1>Page NOT Found !</h1>
        </Default>
    )
}

module.exports = Error