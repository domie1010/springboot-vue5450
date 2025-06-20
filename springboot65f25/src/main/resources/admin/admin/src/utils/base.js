const base = {
    get() {
                return {
            url : "http://localhost:8080/springboot65f25/",
            name: "springboot65f25",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot65f25/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "在线答疑系统"
        } 
    }
}
export default base
