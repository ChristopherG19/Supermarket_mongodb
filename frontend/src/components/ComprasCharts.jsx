const ComprasCharts = () => {

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
                src="https://charts.mongodb.com/charts-project-0-btfei/embed/charts?id=63e1d883-716e-456a-8bfb-d386bffa88ed&maxDataAge=3600&theme=light&autoRefresh=true">  
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
                src="https://charts.mongodb.com/charts-project-0-btfei/embed/charts?id=63e48448-6907-4b70-80ba-39d699e246c1&maxDataAge=3600&theme=light&autoRefresh=true">  
            </iframe>
            <iframe 
                style={style}
                width="620" 
                height="480" 
                src="https://charts.mongodb.com/charts-project-0-btfei/embed/charts?id=63e48c29-b72a-47c0-8183-4359a190d7b8&maxDataAge=3600&theme=light&autoRefresh=true">  
            </iframe>
            <iframe 
                style={style}
                width="620" 
                height="480" 
                src="https://charts.mongodb.com/charts-project-0-btfei/embed/charts?id=63e48896-6907-4f02-8a21-39d699e44a74&maxDataAge=3600&theme=light&autoRefresh=true">
            </iframe>
        </div>
    );
}

export default ComprasCharts
