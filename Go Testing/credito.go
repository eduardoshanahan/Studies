package main

import "fmt"

type Columns struct {
	Importe, Balance float64
}

var m map[string]Columns

func main() {
	m = make(map[string]Columns)
	m["Transalp"] = Columns{
		2700,
		6000,
	}
	fmt.Println(m["Transalp"])
}