/*
package main

import (
    "fmt"
    "log"
    "net/http"
    "html/template"
)

func main() {
    http.HandleFunc("/", serveIndex)
    http.HandleFunc("/login", handleLogin)
    http.HandleFunc("/home", serveHome)
    http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("./css"))))
    http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("./js"))))
    http.Handle("/images/", http.StripPrefix("/images/", http.FileServer(http.Dir("./images"))))

    log.Println("Server started on :8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}

func serveIndex(w http.ResponseWriter, r *http.Request) {
    tmpl, err := template.ParseFiles("index.html")
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    tmpl.Execute(w, nil)
}

func handleLogin(w http.ResponseWriter, r *http.Request) {
    if r.Method != http.MethodPost {
        http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
        return
    }

    cpf := r.FormValue("FieldCPF")
    password := r.FormValue("FieldPassword")

    fmt.Println("CPF:", cpf)
    fmt.Println("Password:", password)

    // Enviar uma resposta indicando que a página deve ser redirecionada
    w.Header().Set("Content-Type", "text/plain")
    w.Write([]byte("redirected"))
}

func serveHome(w http.ResponseWriter, r *http.Request) {
    tmpl, err := template.ParseFiles("home.html")
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    tmpl.Execute(w, nil)
}
