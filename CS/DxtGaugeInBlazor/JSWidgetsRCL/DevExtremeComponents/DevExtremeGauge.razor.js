export async function initializeGauge(element, datasource) {
    const value = !!datasource ? datasource.mean : null;
    const subValues = !!datasource ? [ datasource.min, datasource.max] : [ ];

    return new DevExpress.viz.dxCircularGauge(element, {
        scale: {
            startValue: 10,
            endValue: 40,
            tickInterval: 5,
            label: {
                customizeText(arg) {
                    return `${arg.valueText} °C`;
                },
            },
        },
        rangeContainer: {
            ranges: [
                { startValue: 10, endValue: 20, color: '#0077BE' },
                { startValue: 20, endValue: 30, color: '#E6E200' },
                { startValue: 30, endValue: 40, color: '#77DD77' },
            ],
        },
        tooltip: { enabled: true },
        title: {
            text: 'Temperature in the Greenhouse',
            font: { size: 28 },
        },
        value: value,
        subvalues: subValues
    });
}

export async function changeGaugeDataSource(gauge, datasource) {
    const value = !!datasource ? datasource.mean : null;
    const subValues = !!datasource ? [ datasource.min, datasource.max] : [ ];

    gauge.value(value);
    gauge.subvalues(subValues);
}
