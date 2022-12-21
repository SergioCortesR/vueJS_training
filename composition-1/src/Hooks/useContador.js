import { ref } from "vue";
export function useContador() {
    const numero = ref(0);
    const sumar = () => {
        numero.value += 1;
    }
    const restar = () => {
        numero.value -= 1;
    }
    return {numero, sumar, restar}
}