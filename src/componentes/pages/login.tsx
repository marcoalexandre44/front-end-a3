
import * as React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack/Stack';

export const Login = () => {

	return (
		<div className="App">
			<form>
				<h3>Entrar no Sistema</h3>
				<div className="form-gp">
					<TextField type="email" className="textbox" label="Inserir Email" ></TextField>
				</div>
				<div className="form-gp">
					<TextField type="password" className="textbox" label="Digite a senha"></TextField>
				</div>
				<Stack direction="row" spacing={0.1} margin-top={5}>
					<div className="custom-control custom-checkbox">
						<Checkbox className="custom-control-input" id="customCheck1" />
					</div>
					<div className="custom-control custom-checkbox">
						<InputLabel className="custom-control-label" htmlFor="customCheck1">Manter Conectado</InputLabel>
					</div>
				</Stack>
				<Button variant="contained" type="submit" >Fazer Login</Button>
				<p className="forgot-password text-right">
					Esqueceu a <a href="#">senha?</a>
				</p>
			</form>
		</div>

	);
}

