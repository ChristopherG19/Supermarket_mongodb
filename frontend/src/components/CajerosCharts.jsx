const CajerosCharts = () => {
    
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
                width="620" 
                height="480" 
                src="https://charts.mongodb.com/charts-project-0-btfei/embed/charts?id=63e544bb-6907-40af-8307-39d6997e0453&maxDataAge=3600&theme=light&autoRefresh=true">  
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
                src="https://charts.mongodb.com/charts-project-0-btfei/embed/charts?id=63e53afb-d08f-4f5e-856a-ae7b6f09c51c&maxDataAge=3600&theme=light&autoRefresh=true">  
            </iframe>
            <iframe 
                style={style}
                width="620" 
                height="480" 
                src="https://charts.mongodb.com/charts-project-0-btfei/embed/charts?id=63e53067-1dbb-4dca-8128-9cdd998e917a&maxDataAge=3600&theme=light&autoRefresh=true">
            </iframe>
        </div>
    );
}

export default CajerosCharts
