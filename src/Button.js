function Button() {
    return(
        <div className="block2">
            <div className="list">
                <button className="btn" onClick={()=> document.getElementById('list-item').classList.toggle("overflow")}>Отобразить список подписантов</button>
                <div id='list-item' className="list-item overflow">
                    Нальгиев Рамазан
                </div>

            </div>
            <div className="count">
                <button className="btn" onClick={()=> document.getElementById('count-number').classList.toggle("overflow")}>Отобразить Количество подписантов</button>
                <div id='count-number' className="count-number overflow">
                    234
                </div>
            </div>
        </div>
    )
}

export default Button