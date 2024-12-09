type Suggestion = {
    city: number;
    landmark: number;
    city_full_name: string;
    landmark_full_name: string;
}

const getSuggestions = (json: any) => {
    const airportJson = json['data']['info']['airport'] as Suggestion[];
    const cityJson = json['data']['info']['city'] as Suggestion[];
    const landmarkJson = json['data']['info']['landmark'] as Suggestion[];
    const trainStationJson = json['data']['info']['train_station'] as Suggestion[];

    const airport = airportJson.map(item => {
        return {
            id: item.city,
            landmarkId: item.landmark,
            locationText: `${item.landmark_full_name}, ${item.city_full_name}`,
            type: 'Airport',
        };
    })

    const city = cityJson.map(item => {
        return {
            id: item.city,
            landmarkId: item.city,
            locationText: item.city_full_name,
            type: 'City',
        };
    })

    const landmark = landmarkJson.map(item => {
        return {
            id: item.city,
            landmarkId: item.landmark,
            locationText: `${item.landmark_full_name}, ${item.city_full_name}`,
            type: 'Landmark',
        };
    })
    
    const trainStation = trainStationJson.map(item => {
        return {
            id: item.city,
            landmarkId: item.landmark,
            locationText: `${item.landmark_full_name}, ${item.city_full_name}`,
            type: 'Train Station',
        };
    })

    return [airport, city, landmark, trainStation]
}

export const Qeeq = {
    getSuggestions,
}