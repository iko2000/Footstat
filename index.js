

function entered() {
    let inputr = document.getElementById("user").value 
    switch(inputr) {
        case "1986":
        case "2022":
        case "1978":
            document.getElementById("generate").innerText = "Argentina";
          break;
        case "2014":
          case "1990":
          case "1954":
          case "1974":
            document.getElementById("generate").innerText = "Germany";
          break;
          case "1998":
            case "2018":
            document.getElementById("generate").innerText = "France";
          break;
          case "2010":
            document.getElementById("generate").innerText = "Spain";
          break;
          case "1958":
          case "1962":
          case "1970":
          case "1994": 
          case "2002":
            document.getElementById("generate").innerText = "Brazil";
          break;
          case "1930":
          case "1950":
            document.getElementById("generate").innerText = "Urugay";
          break;
          case "1966":
            document.getElementById("generate").innerText = "England";
          break;
          case "1934":
          case "1938":
          case "1982": 
          case "2006":
            document.getElementById("generate").innerText = "Italy";
          break;
        default:
          document.getElementById("generate").innerText = "The World Cup was not held this year";
          break;
      }

} 

function refresh() {
  window.location.reload();
}


function whoscored() {
    let whosc = document.getElementById("who-inp").value 
    let answ = document.getElementById("who-generator")
    switch(whosc) {
        case "1930":
            answ.innerText = "Vic Watson";
          break;
        case "1931":
            answ.innerText = "Tom Waring";
          break;
          case "1932":
            answ.innerText = "Dixie Dean";
          break;
          case "1933":
            answ.innerText = "Jack Bowers";
          break; 
          case "1934":
            answ.innerText = "Jack Bowers";
          break;
          case "1935":
            answ.innerText = "Ted Drake";
          break;
          case "1936":
            answ.innerText = "Ginger Richardson";
          break;
          case "1937":
            answ.innerText = "Freddie Steele";
          break;
          case "1938":
            answ.innerText = "Tommy Lawton";
          break;
          case "1939":
            answ.innerText = "Tommy Lawton and Micky Fenton";
          break;
          case "1940":
          case "1941":
          case "1942":
          case "1943":
          case "1944":
          case "1945":
          case "1946":
            answ.innerText = "WW2 - No data";
          break;
          case "1947":
            answ.innerText = "Dennis Westcott";
          break;
          case "1948":
            answ.innerText = "Ronnie Rooke";
          break;
          case "1949":
            answ.innerText = "Willie Moir";
          break;
          case "1950":
            answ.innerText = "Dickie Davis";
          break;
          case "1951":
            answ.innerText = "Stan Mortensen";
          break;
          case "1952":
            answ.innerText = "Jorge Robledo";
          break;
          case "1953":
            answ.innerText = "Peter Harris and Charlie Wayman";
          break;
          case "1954":
            answ.innerText = "Jimmy Glazzard";
          break;
          case "1955":
            answ.innerText = "Ronnie Allen";
          break;
          case "1956":
            answ.innerText = "Nat Lofthouse";
          break;
          case "1957":
            answ.innerText = "John Charles";
          break;
          case "1958":
            answ.innerText = "Bobby Smith";
          break;
          case "1959":
            answ.innerText = "Jimmy Greaves and	Bobby Smith";
          break;
          case "1960":
            answ.innerText = "Dennis Viollet";
          break;
          case "1961":
            answ.innerText = "Jimmy Greaves";
          break;
          case "1962":
            answ.innerText = "Raymond Crawford and Derek Kevan";
          break;
          case "1963":
            answ.innerText = "Jimmy Greaves";
          break;
          case "1964":
            answ.innerText = "Jimmy Greaves";
          break;
          case "1965":
            answ.innerText = "Jimmy Greaves and Derek Kevan";
          break;
          case "1966":
            answ.innerText = "Willie Irvine and Roger Hunt";
          break;
          case "1967":
            answ.innerText = "Ron Davies";
          break;
          case "1968":
            answ.innerText = "George Best and	Ron Davies";
          break;
          case "1969":
            answ.innerText = "Jimmy Greaves";
          break;
          case "1970":
            answ.innerText = "Jeffrey Astle";
          break;
          case "1971":
            answ.innerText = "Tony Brown";
          break;
          case "1972":
            answ.innerText = "Francis Lee";
          break;
          case "1973":
            answ.innerText = "Bryan Robson";
          break;
          case "1974":
            answ.innerText = "Mick Channon";
          break;
          case "1975":
            answ.innerText = "Malcolm MacDonald";
          break;
          case "1976":
            answ.innerText = "Ted MacDougall";
          break;
          case "1977":
            answ.innerText = "Andy Gray and	Malcolm MacDonald";
          break;
          case "1978":
            answ.innerText = "Bob Latchford";
          break;
          case "1979":
            answ.innerText = "Frank Worthington";
          break;
          case "1980":
            answ.innerText = "Phil Boyer";
          break;
          case "1981":
            answ.innerText = "Peter Withe and	Steve Archibald";
          break;
          case "1982":
            answ.innerText = "Kevin Keegan";
          break;
          case "1983":
            answ.innerText = "Luther Blissett";
          break;
          case "1984":
            answ.innerText = "Ian Rush";
          break;
          case "1985":
            answ.innerText = "Gary Lineker and Kerry Dixon";
          break;
          case "1986":
            answ.innerText = "Gary Lineker";
          break;
          case "1987":
            answ.innerText = "Clive Allen";
          break;
          case "1988":
            answ.innerText = "John Aldridge";
          break;
          case "1989":
            answ.innerText = "Alan Smith";
          break;
          case "1990":
            answ.innerText = "Gary Lineker";
          break;
          case "1991":
            answ.innerText = "Alan Smith";
          break;
          case "1992":
            answ.innerText = "Ian Wright";
          break;
          case "1993":
            answ.innerText = "Teddy Sheringham";
          break;
          case "1994":
            answ.innerText = "Andy Cole";
          break;
          case "1995":
            answ.innerText = "Alan Shearer";
          break;
          case "1996":
            answ.innerText = "Alan Shearer";
          break;
          case "1997":
            answ.innerText = "Alan Shearer";
          break;
          case "1998":
            answ.innerText = "Michael Owen, Dion Dublin and Chris Sutton";
          break;
          case "1999":
            answ.innerText = "Michael Owen, Jimmy Floyd Hasselbaink and Dwight Yorke";
          break;
          case "2000":
            answ.innerText = "Kevin Phillips";
          break;
          case "2001":
            answ.innerText = "Jimmy Floyd Hasselbaink";
          break;
          case "2002":
            answ.innerText = "Thierry Henry";
          break;
          case "2003":
            answ.innerText = "Ruud van Nistelrooy";
          break;
          case "2004":
            answ.innerText = "Thierry Henry";
          break;
          case "2005":
            answ.innerText = "Thierry Henry";
          break;
          case "2006":
            answ.innerText = "Thierry Henry";
          break;
          case "2007":
            answ.innerText = "Didier Drogba";
          break;
          case "2008":
            answ.innerText = "Cristiano Ronaldo";
          break;
          case "2009":
            answ.innerText = "Nicolas Anelka";
          break;
          case "2010":
            answ.innerText = "Didier Drogba";
          break;
          case "2011":
            answ.innerText = "Dimitar Berbatov and Carlos Tévez";
          break;
          case "2012":
            answ.innerText = "Robin van Persie";
          break;
          case "2013":
            answ.innerText = "Robin van Persie";
          break;
          case "2014":
            answ.innerText = "Luis Suárez";
          break;
          case "2015":
            answ.innerText = "Kun Agüero";
          break;
          case "2016":
            answ.innerText = "Harry Kane";
          break;
          case "2017":
            answ.innerText = "Harry Kane";
          break;
          case "2018":
            answ.innerText = "Mohamed Salah"
          break;
          case "2019":
            answ.innerText = "Aubameyang, Mohamed Salah and	Sadio Mané";
          break;
          case "2020":
            answ.innerText = "Jamie Vardy";
          break;
          case "2021":
            answ.innerText = "Harry Kane";
          break;
          case "2022":
            answ.innerText = "Mohamed Salah and Heung-min Son";
          break;

        default:
          answ.innerText = "No data aviable for this year";
          break;
      }

} 
