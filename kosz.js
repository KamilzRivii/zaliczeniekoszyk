

        var cenaKoszyka=0;
        var liczbaproduktow=0;

        var buttons =document.getElementsByClassName('dodaj');
        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            button.addEventListener('click',function ()
                {
                    liczbaproduktow++;
                    if (liczbaproduktow<=8){

                    var tortElement = document.getElementsByClassName('nazwa')[i];
                    var newElement=document.createElement('div');
                    newElement.innerText=tortElement.innerText;
                    newElement.classList.add('test');
                    var koszEl=document.querySelector('.kosz2');
                    koszEl.insertBefore(newElement,koszEl.lastChild);


                    var newElement_3=document.createElement('button');
                    newElement_3.innerText="Usuń";
                    newElement_3.style.fontSize='16px';
                    newElement_3.classList.add('usuwanie');

                    koszEl.insertBefore(newElement_3,koszEl.lastChild);
                    var tortCena = document.getElementsByClassName('cena')[i];
                    var newElement_2=document.createElement('div');
                    newElement_2.innerText=tortCena.innerText;
                    cenaKoszyka+=Number(tortCena.firstChild.textContent.trim());
                    var cenamiejsce=document.getElementsByClassName('cenak')[0];
                    cenamiejsce.innerText=cenaKoszyka.toFixed(2);
                    var zll=document.createElement("span");
                    zll.innerText=" zł";
                    cenamiejsce.appendChild(zll);
                    newElement_2.classList.add('hajs');
                    newElement_2.style.marginTop='63px';
                    newElement_2.style.marginLeft='10px';
                    newElement_2.style.fontSize='18px';
                    koszEl.insertBefore(newElement_2,koszEl.lastChild);

                    newElement_3.addEventListener('click',function ()
                    {
                        newElement_3.remove();
                        newElement.remove();
                        newElement_2.remove();
                        cenaKoszyka-=Number(tortCena.firstChild.textContent.trim());
                        cenamiejsce.innerText=cenaKoszyka.toFixed(2);
                        cenamiejsce.appendChild(zll);
                        liczbaproduktow--;


                    })
                    var kosz2el=document.getElementsByClassName('kosz2')[0];
                    var wyczyscc=document.getElementsByClassName('wyczysc')[0];
                    kosz2el.style.height="785px";
                    wyczyscc.addEventListener('click',function ()
                    {
                        newElement_3.remove();
                        newElement.remove();
                        newElement_2.remove();
                        cenamiejsce.innerText=0;
                        cenamiejsce.appendChild(zll);
                        cenaKoszyka=0;
                        liczbaproduktow=0;

                    }
                    )
                }
                    var kup=document.getElementsByClassName('kup')[0];
                    kup.addEventListener('click',function (event)

                        {

                            if (liczbaproduktow===0)
                            {
                                window.alert("Proszę dodaj conajmniej jeden produkt")
                            }
                            else
                            {
                                window.alert("Dokonano zakupu")
                                kosz2el.querySelectorAll('*').forEach(n=>n.remove());
                                cenamiejsce.innerText=0;
                                cenamiejsce.appendChild(zll);
                                cenaKoszyka=0;
                                liczbaproduktow=0;
                                event.stopImmediatePropagation();
                            }

                        }

                    )
                }


            )

        }











