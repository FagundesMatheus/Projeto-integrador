package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type LoginData struct {
	CPF      string `json:"cpf"`
	Password string `json:"password"`
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	// Verifica se o método da requisição é POST
	if r.Method != http.MethodPost {
		http.Error(w, "Método não permitido", http.StatusMethodNotAllowed)
		return
	}

	// Decodifica os dados do JSON recebido
	var data LoginData
	err := json.NewDecoder(r.Body).Decode(&data)
	if err != nil {
		http.Error(w, "Erro ao decodificar JSON", http.StatusBadRequest)
		return
	}

	// (Adicione aqui a lógica de autenticação)
	fmt.Fprintf(w, "Dados recebidos: CPF=%s, Senha=%s", data.CPF, data.Password)
}

func main() {
	http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("css"))))
	// Configura o manipulador para servir um arquivo HTML quando a rota raiz for acessada
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "index.html")
	})

	// Configura o manipulador para lidar com as solicitações de login
	http.HandleFunc("/login", loginHandler)

	// Inicia o servidor na porta 8080
	http.ListenAndServe(":8080", nil)
}
