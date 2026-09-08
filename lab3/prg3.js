import {createReadStream}from "http";
import http from "http";




const server= http.createServer((req,res)=>{
if(req.url==="/bottle") {
res.setHeader("content-type","text/html");


const stream=createReadStream('bottle.html',{endcoding:'utf-8'})
stream.pipe(res);
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Smart Water Bottle</title>

    <!-- Connect CSS file -->
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- Navbar -->
    <nav>
        <h2>💧 AquaSmart</h2>

        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#specifications">Specifications</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>


    <!-- Hero Section -->
    <section class="hero" id="home">

        <div class="hero-text">
            <h1>Smart Water Bottle</h1>

            <p>
                Stay hydrated and stay healthy with AquaSmart.
                Our smart water bottle reminds you to drink water,
                tracks your daily hydration, and keeps your water
                at the perfect temperature.
            </p>

            <a href="#features" class="btn">Explore Features</a>
        </div>

        <div class="bottle">
            <div class="screen">
                💧 750 ml<br>
                75% Full
            </div>
        </div>

    </section>


    <!-- Features Section -->
    <section class="features" id="features">

        <h2>Smart Features</h2>

        <div class="feature-container">

            <div class="card">
                <div class="icon">⏰</div>
                <h3>Hydration Reminder</h3>
                <p>
                    Get smart reminders when it is time to drink water.
                </p>
            </div>

            <div class="card">
                <div class="icon">🌡️</div>
                <h3>Temperature Control</h3>
                <p>
                    Monitor your water temperature in real time.
                </p>
            </div>

            <div class="card">
                <div class="icon">📱</div>
                <h3>Mobile App</h3>
                <p>
                    Connect your bottle with your smartphone
                    and track hydration.
                </p>
            </div>

            <div class="card">
                <div class="icon">🔋</div>
                <h3>Long Battery</h3>
                <p>
                    Enjoy up to 7 days of battery life on a single charge.
                </p>
            </div>

        </div>

    </section>


    <!-- Specifications Section -->
    <section class="specifications" id="specifications">

        <h2>Specifications</h2>

        <table>

            <tr>
                <th>Specification</th>
                <th>Details</th>
            </tr>

            <tr>
                <td>Capacity</td>
                <td>750 ml</td>
            </tr>

            <tr>
                <td>Material</td>
                <td>Stainless Steel</td>
            </tr>

            <tr>
                <td>Battery Life</td>
                <td>Up to 7 Days</td>
            </tr>

            <tr>
                <td>Connectivity</td>
                <td>Bluetooth</td>
            </tr>

            <tr>
                <td>Temperature Display</td>
                <td>Yes</td>
            </tr>

            <tr>
                <td>Waterproof</td>
                <td>IPX7</td>
            </tr>

        </table>

    </section>


    <!-- Footer -->
    <footer id="contact">
        <p>
            © 2026 AquaSmart | Smart Hydration for a Better Life
        </p>
    </footer>

</body>
</html>
```

}else{
    resstatusCode=404;
    res.end();
}

    res.end("<h1>Hello Server</h1>");

});
server.listen(3000,()=> console.log("prg3 is running"));