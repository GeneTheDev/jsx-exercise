function App() {
    return (
        <div>
            <Tweet
                name="Kevin Stanley"
                username="Stan123"
                date={new Date().toDateString()}
                message="Hello World"
            />
            <Tweet
                name="Eugene Owens"
                username="Gene231"
                date={new Date().toDateString()}
                message="Hello There"
            />
            <Tweet
                name="Amanda Rose"
                username="Rose513"
                date={new Date().toDateString()}
                message="Hey There"
            />
        </div>
    );
}