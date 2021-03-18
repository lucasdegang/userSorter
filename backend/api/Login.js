// o app eh o proprio app.express e o outro parametro e o conteudo a ser recebido.
// pode criar quantos parametros forem necessarios

module.exports = app => {
    const getLoginUser = async (req, res) => {
        
        const user = {...req.body}
        console.log(user.email)
        
        if(!user.email){
            res.status(400).send("Dados inválidos");
        }else{
            //res.send({ status: '200', msg: 'OK', obj: user.email})
            //res.send(JSON.stringify(req.body));
            res.status(200).send(true);
        }

        //res.send("Login > getLoginUser")
        //console.log(param)
    }

    app.get('/sign-in/auth', getLoginUser)
    //app.post('/qualquerDiretorio', postLoginUser)
    //app.put('/qualquerDiretorio', putLoginUser)
    //app.delete('/qualquerDiretorio', deleteLoginUser)

    return { getLoginUser }
}