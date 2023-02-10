import '../styles/Routes.css'

const CajasCharts = () => {

    const style = {
        background: '#21313C',
        border: 'none',
        borderRadius: '2px',
        boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
        margin: "5px",
        marginTop: "10px"
    }

    return (
        <div>
            <iframe 
                style={style}
                width="620" 
                height="480" 
                src="https://charts.mongodb.com/charts-project-0-btfei/embed/charts?id=63e52ae7-b72a-45a1-8755-4359a10cc89d&maxDataAge=3600&theme=light&autoRefresh=true">
            </iframe>
            <iframe 
                style={style}
                width="620" 
                height="480" 
                src="https://charts.mongodb.com/charts-project-0-btfei/embed/charts?id=cea70902-e0f0-46f3-ad55-457dafe9ab65&maxDataAge=3600&theme=light&autoRefresh=true">
            </iframe>
        </div>
    );
}

export default CajasCharts