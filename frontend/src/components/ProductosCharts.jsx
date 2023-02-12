
const ProductosCharts = () => {

    const style = {
        background: '#21313C',
        border: 'none',
        borderRadius: '2px',
        boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
        margin: "5px"
    }

    return (
        <div>
            <iframe 
                style={{
                    background: '#21313C',
                    border: 'none',
                    borderRadius: '2px',
                    boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
                    margin: "5px",
                    marginTop: "10px"
                }}
                width="660" 
                height="480" 
                src="https://charts.mongodb.com/charts-project-0-btfei/embed/charts?id=63e55dd6-6665-424a-8526-e36419d91a48&maxDataAge=3600&theme=light&autoRefresh=true">
            </iframe>
            <iframe 
                style={{
                    background: '#21313C',
                    border: 'none',
                    borderRadius: '2px',
                    boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
                    margin: "5px",
                    marginTop: "10px"
                }}
                width="620" 
                height="480" 
                src="https://charts.mongodb.com/charts-project-0-btfei/embed/charts?id=63e5623b-7e11-4d84-82d2-487cfda32d23&maxDataAge=3600&theme=light&autoRefresh=true">
            </iframe>
            <iframe 
                style={style}
                width="660" 
                height="480" 
                src="https://charts.mongodb.com/charts-project-0-btfei/embed/charts?id=63e563eb-16d4-4b3b-82e2-22851cddedba&maxDataAge=3600&theme=light&autoRefresh=true">
            </iframe>
            <iframe 
                style={style}
                width="620" 
                height="480" 
                src="https://charts.mongodb.com/charts-project-0-btfei/embed/charts?id=63e5798f-6665-4a4a-84ad-e36419f3de17&maxDataAge=3600&theme=light&autoRefresh=true">
            </iframe>
            <iframe 
                style={style}
                width="620" 
                height="480" 
                src="https://charts.mongodb.com/charts-project-0-btfei/embed/charts?id=63e57d37-67a6-4e19-8b4b-0caf754dddc1&maxDataAge=3600&theme=light&autoRefresh=true">
            </iframe>
        </div>
    );
}

export default ProductosCharts
