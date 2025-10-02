import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { chartsTooltipClasses } from '@mui/x-charts/ChartsTooltip';

const products = [
    { id: 591, productName: "Apple", price: 3000, hasDiscount: true, discountPrice: 10 },
    { id: 590, productName: "Sumsung", price: 8000, hasDiscount: true, discountPrice: 1000 },
    { id: 581, productName: "Huawei", price: 14000, hasDiscount: false, discountPrice: 0 },
    { id: 593, productName: "Xiaomi", price: 14000, hasDiscount: true, discountPrice: 80 },
    { id: 592, productName: "Poco", price: 18020, hasDiscount: true, discountPrice: 3300 },
    { id: 584, productName: "Redmi", price: 6000, hasDiscount: false, discountPrice: 20000 },
    { id: 583, productName: "Tecno", price: 5800, hasDiscount: false, discountPrice: 8000 },
    { id: 585, productName: "Infinix", price: 13099, hasDiscount: false, discountPrice: 7000 },
    { id: 589, productName: "Redmagic", price: 14100, hasDiscount: false, discountPrice: 20000 },
    { id: 588, productName: "ZTE", price: 16100, hasDiscount: false, discountPrice: 30000 },
    { id: 584, productName: "Nokia", price: 13100, hasDiscount: false, discountPrice: 40000 },
    { id: 787, productName: "Blackbary", price: 13100, hasDiscount: false, discountPrice: 20000 },
    { id: 722, productName: "Pixel", price: 23100, hasDiscount: false, discountPrice: 20000 },
];

const xAxisLabels = products.map((p) => p.productName);
const originalPrices = products.map((p) => p.price);

export default function SalesRevenueChart() {
    return (
        <div className='w-[100%]'>
            <LineChart
                height={450}

                xAxis={[
                    {
                        scaleType: 'band',
                        data: xAxisLabels,

                        tickLabelStyle: { fill: '#A1A7C4' },
                    },
                ]}
                yAxis={[
                    {

                        tickLabelStyle: { fill: '#A1A7C4' },
                    },
                ]}
                series={[
                    {
                        data: originalPrices,

                        color: '#1E5EFF',

                    },
                ]}
                sx={{
                    '& .MuiChartsAxis-line': {
                        display: 'none',
                    },
                    '& .MuiChartsAxis-tick': {
                        display: 'none',
                    },

                    '& .MuiLineElement-root': {
                        strokeWidth: 5,
                    }

                }}
                slotProps={{
                    tooltip: {
                        sx: {
                            [`&.${chartsTooltipClasses.root}`]: {
                                backgroundColor: '#f0f0f0',
                                borderRadius: 2,
                                padding: '8px',
                            },
                            [`& .${chartsTooltipClasses.valueCell}`]: {
                                color: 'red',
                            },
                            [`& .${chartsTooltipClasses.labelCell}`]: {
                                color: 'black',
                            },
                        },
                    },
                }}
            />
        </div>
    );
}