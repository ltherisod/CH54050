const withLog = (WrappedComponent) => {
    return function WithLog(props){
        useEffect(()=>{
            console.log('componente utilizando hoc')
        },[])
        return <WrappedComponent {...props}/>
    }
}

export default withLog