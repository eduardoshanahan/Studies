package main

import (
	"fmt"
	"math"
)

func sqrt(x float64) string {
	if x >= 0 {
		return fmt.Sprint(math.Sqrt(x))
	}
	return sqrt(-x) + "i"
}

func main(){
	fmt.Println(sqrt(2), sqrt(-4), sqrt(0))
}