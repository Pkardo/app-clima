export async function buscarCordenadas(local) {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${local}&count=1&language=pt`)
        return response.json();
    };

export async function buscarClima(latitude, longitude) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&timezone=auto`)

    return response.json();
};