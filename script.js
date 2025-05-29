const translations = {
            uk: {
                movies_title: "Рекомендовані фільми",
                series_title: "Рекомендовані серіали",
                search_placeholder: "Пошук...",
                genre_filter_all: "Всі жанри",
                sort_filter: "Сортувати за",
                sort_rating: "Рейтинг",
                sort_year: "Рік",
                bookmarks_title: "Мої закладки",
                bookmarks_movies: "Фільми",
                bookmarks_series: "Серіали",
                no_bookmarks_movies: "У вас немає фільмів у закладках.",
                no_bookmarks_series: "У вас немає серіалів у закладках.",
                login_title: "Вхід",
                register_title: "Реєстрація",
                username_placeholder: "Ім'я користувача",
                password_placeholder: "Пароль",
                confirm_password_placeholder: "Підтвердіть пароль",
                login_button: "Увійти",
                register_button: "Зареєструватися",
                register_link: "Немає облікового запису? Зареєструйтесь",
                login_link: "Вже маєте обліковий запис? Увійдіть",
                account_title: "Обліковий запис",
                welcome: "Ласкаво просимо, {username}!",
                profile_title: "Ваш профіль",
                first_name_placeholder: "Ім'я",
                last_name_placeholder: "Прізвище",
                email_placeholder: "Електронна пошта",
                favorite_genre_placeholder: "Оберіть улюблений жанр",
                save_profile: "Зберегти",
                logout: "Вийти",
                no_account: "Будь ласка, увійдіть, щоб переглянути ваш обліковий запис.",
                no_bookmarks: "Будь ласка, увійдіть, щоб переглянути ваші закладки.",
                genre_label: "Жанри",
                rating_label: "Рейтинг",
                year_label: "Рік",
                director_label: "Режисер",
                duration_label: "Тривалість",
                description_label: "Опис",
                add_bookmark: "Додати до закладок",
                remove_bookmark: "Видалити з закладок",
                back_to_movies: "Назад до фільмів",
                back_to_series: "Назад до серіалів",
                prev_page: "Попередня",
                next_page: "Наступна",
                page: "Сторінка",
                of: "з",
                login_required: "Будь ласка, увійдіть, щоб додати до закладок.",
                login_error: "Будь ласка, заповніть усі поля.",
                login_invalid: "Неправильне ім'я користувача або пароль.",
                register_error: "Будь ласка, заповніть усі поля та перевірте, чи паролі співпадають.",
                register_username_exists: "Користувач із таким ім'ям уже існує.",
                register_success: "Реєстрація успішна! Ви увійшли.",
                login_success: "Вхід успішний!",
                profile_saved: "Профіль збережено!",
                logout_success: "Ви вийшли.",
                genres: {
                    "Комедія": "Комедія",
                    "Драма": "Драма",
                    "Екшн": "Екшн",
                    "Фантастика": "Фантастика",
                    "Трилер": "Трилер",
                    "Романтика": "Романтика",
                    "Пригоди": "Пригоди",
                    "Фентезі": "Фентезі",
                    "Детектив": "Детектив",
                    "Жахи": "Жахи",
                    "Кримінал": "Кримінал",
                    "Історичний": "Історичний"
                }
            },
            en: {
                movies_title: "Recommended Movies",
                series_title: "Recommended Series",
                search_placeholder: "Search...",
                genre_filter_all: "All Genres",
                sort_filter: "Sort by",
                sort_rating: "Rating",
                sort_year: "Year",
                bookmarks_title: "My Bookmarks",
                bookmarks_movies: "Movies",
                bookmarks_series: "Series",
                no_bookmarks_movies: "You have no movies in bookmarks.",
                no_bookmarks_series: "You have no series in bookmarks.",
                login_title: "Login",
                register_title: "Register",
                username_placeholder: "Username",
                password_placeholder: "Password",
                confirm_password_placeholder: "Confirm Password",
                login_button: "Login",
                register_button: "Register",
                register_link: "Don't have an account? Register",
                login_link: "Already have an account? Login",
                account_title: "Account",
                welcome: "Welcome, {username}!",
                profile_title: "Your Profile",
                first_name_placeholder: "First Name",
                last_name_placeholder: "Last Name",
                email_placeholder: "Email",
                favorite_genre_placeholder: "Select Favorite Genre",
                save_profile: "Save",
                logout: "Logout",
                no_account: "Please log in to view your account.",
                no_bookmarks: "Please log in to view your bookmarks.",
                genre_label: "Genres",
                rating_label: "Rating",
                year_label: "Year",
                director_label: "Director",
                duration_label: "Duration",
                description_label: "Description",
                add_bookmark: "Add to Bookmarks",
                remove_bookmark: "Remove from Bookmarks",
                back_to_movies: "Back to Movies",
                back_to_series: "Back to Series",
                prev_page: "Previous",
                next_page: "Next",
                page: "Page",
                of: "of",
                login_required: "Please log in to add to bookmarks.",
                login_error: "Please fill in all fields.",
                login_invalid: "Incorrect username or password.",
                register_error: "Please fill in all fields and ensure passwords match.",
                register_username_exists: "A user with this username already exists.",
                register_success: "Registration successful! You are logged in.",
                login_success: "Login successful!",
                profile_saved: "Profile saved!",
                logout_success: "You have logged out.",
                genres: {
                    "Комедія": "Comedy",
                    "Драма": "Drama",
                    "Екшн": "Action",
                    "Фантастика": "Science Fiction",
                    "Трилер": "Thriller",
                    "Романтика": "Romance",
                    "Пригоди": "Adventure",
                    "Фентезі": "Fantasy",
                    "Детектив": "Detective",
                    "Жахи": "Horror",
                    "Кримінал": "Crime",
                    "Історичний": "Historical"
                }
            }
        };

        // Initialize the movies array with localStorage update
        let movies = JSON.parse(localStorage.getItem('movies')) || [
            { title: { uk: "Шалений Макс: Дорога гніву", en: "Mad Max: Fury Road" }, genres: ["Екшн", "Пригоди", "Фантастика"], rating: 4, poster: "https://uakino.me/uploads/posts/2022-07/1656965315_11.jpg", description: { uk: "Колись давно в минулому житті Макс Рокотанскі був службовцем Основного Силового Патруля, мав люблячу дружину і дитину і затишний будинок, але позбувся всього цього за примхою банди злочинців, які вбили його родину. Після смерті дружини і сина для Макса найголовнішою метою стала помста. Саме вона не дозволила йому зійти з розуму від горя. Але після того, як всі винуватці були знайдені і знищені, життя перестало цікавити спустошеного чоловіка. Його абсолютно не хвилює той факт, що почалася енергетична криза та через що колишній світ канув у минуле, а світова війна знищила колись квітучу землю, перетворивши її на мляву пустелю. Тепер влада в світі належить тому, хто володіє паливом, запасами води та їжі. По всьому світі з'являється безліч банд, кожна з яких пишається своєю жорстокістю і силою. Мимоволі Максу доведеться вчитися жити в цьому новому жорстокому світі і обзаводитися новими соратниками і друзями ...", en: "Once upon a time in a past life, Max Rokotansky was an employee of the Main Power Patrol, had a loving wife and child and a cozy house, but lost all this at the whim of a gang of criminals who killed his family. After the death of his wife and son for Max, the main goal was revenge. It was she who did not allow him to go crazy with grief. But after all the culprits were found and destroyed, life ceased to interest the devastated man. He does not care at all about the fact that an energy crisis has begun and because of which the former world has sunk into the past, and the world war has destroyed the once blooming land, turning it into a lifeless desert. Now the power in the world belongs to those who own fuel, water supplies and food. Around the world there are many gangs, each of which is proud of its cruelty and strength. Involuntarily, Max will have to learn to live in this new cruel world and acquire new associates and friends..." }, year: 2015, director: "Джордж Міллер", duration: "120 хв" },
            { title: { uk: "Початок", en: "Inception" }, genres: ["Фантастика", "Трилер", "Екшн"], rating: 4, poster: "https://uakino.me/uploads/post/Inception/evcpThLSeQLlQ8xNvjkI2PQyuMh.jpg", description: { uk: "Ми звикли, що в нашому розумінні злодій - це людина здатна вкрасти якісь цінності або гроші. Сюжет фантастичного бойовика «Початок» розповідає про злодіїв здатних вкрасти ідею прямо у людини з підсвідомості. Одним з таких є головний герой фільму Домінік Кобб. Після того як його дружина померла, він змушений ховатися, і не може навіть повернутися в країну, щоб побачити дітей. Якось раз Кобб отримує дуже неординарне замовлення: йому потрібно не вкрасти, а навпаки впровадити нову ідею в підсвідомість людини. Домініку не надто хотітися братися за цю справу, але замовник в обмін пропонує можливість повернутися додому. Заручившись підтримкою професіоналів цієї справи, Кобб починає розробляти план як все провернути. Все потрібно дуже добре продумати, адже злодіям доведеться відтворити багатошарову реальність в підсвідомості об'єкта, в результаті чого межі можуть почати стиратися.", en: "We are used to the fact that in our understanding a thief is a person capable of stealing some valuables or money. The plot of the fantastic action movie Inception tells about thieves who can steal an idea directly from a person from the subconscious. One of these is the main character of the film Dominic Cobb. After his wife died, he is forced to hide, and cannot even return to the country to see the children. Once Cobb receives a very extraordinary order: he needs not to steal, but rather to introduce a new idea into the subconscious of a person. Dominik is not too willing to take on this business, but the customer in exchange offers the opportunity to return home. With the support of professionals in this business, Cobb begins to develop a plan for how to turn everything around. Everything needs to be thought out very well, because thieves will have to recreate a multi-layered reality in the subconscious of the object, as a result of which the boundaries may begin to erase." }, year: 2010, director: "Крістофер Нолан", duration: "148 хв" },
            { title: { uk: "Недоторканні", en: "The Intouchables" }, genres: ["Комедія", "Драма"], rating: 5, poster: "https://uakino.me/uploads/posts/2017-11/1511342116_r6j98qa7clsvpvymc3x6zpci07.jpg", description: { uk: "Філіпу не потрібні гроші - у нього їх більш ніж достатньо. Правда, є проблема: літаючи на пароплані, він потрапив в аварію і з тих пір прикутий до інвалідного крісла. Йому потрібна доглядальниця. З служби зайнятості надсилають темношкірого Дрісса - людину з сумнівним минулим і невизначеним майбутнім. Хлопець просить письмову відмову, щоб, не працюючи, отримувати допомогу, але Філіп непохитний у вирішенні найняти саме його. Іноді ти повинен побувати в чужому світі, щоб зрозуміти, чого тобі бракує у власному. Під таким слоганом в вересні 2011 року вийшов у світовий прокат фільм 1 + 1. Сюжет повністю відповідає. Філіп - чистісінької води аристократ з відповідними манерами. Дрісс - мігрант, який не знає хороших манер, якому не чужі проблеми з законом, а жінки його цікавлять в суто постільному плані. Безгрошовий африканець дивиться на проблеми крізь пальці, чим так чарує Філіпа, який розуміє, що у хлопця можна і потрібно повчитися. У свою чергу, і Дрісс використовує шанс розкрити свої найкращі якості. У підсумку ці дві людини зіграють в житті один одного важливі ролі. Події будуть супроводжуватися веселими ситуаціями і ліричними відступами.", en: "Philip does not need money - he has more than enough. True, there is a problem: flying on a steamboat, he had an accident and has since been confined to a wheelchair. He needs a nurse. A black Driss is sent from the employment service - a man with a dubious past and an uncertain future. The guy asks for a written refusal so that, without working, he can receive help, but Philip is adamant in deciding to hire him. Sometimes you have to visit a foreign world to understand what you lack in your own. Under this slogan, in September 2011, the film 1 + 1 was released worldwide. The plot is completely consistent. Philip is a pure aristocrat with appropriate manners. Driss is a migrant who does not know good manners, who is not alien to problems with the law, and women are interested in him in purely bed plan. A penniless African looks at the problems through his fingers, which fascinates Philip, who understands that the guy can and should learn. In turn, and Driss takes the chance to reveal their best qualities. As a result, these two people will play important roles in each other's lives. Events will be accompanied by fun situations and lyrical digressions." }, year: 2011, director: "Олів’є Накаш, Ерік Толедано", duration: "112 хв" },
            { title: { uk: "Титанік", en: "Titanic" }, genres: ["Романтика", "Драма", "Історичний"], rating: 5, poster: "https://uakino.me/uploads/post/Titanic/2XTMRX7xgBh3aoJnsUAE6aB1wza.jpg", description: { uk: "Титанік (1997) - епічний романтичний фільм, який розповідає історію найбільшого корабельного катастрофи в історії, переплетену з непередбачуваною історією кохання. Головні ролі зіграли Кейт Вінслет (Роуз Дьюїтт Б'юкейтер) та Леонардо ДіКапріо (Джек Доусон). Герої фільму, з різних соціальних верств, закохалися одне в одного на борту зловісного корабля, який здійснює свій рейс через північну Атлантику у 1912 році. Їхня неперевершена любовна історія розгортається на тлі величного корабля, який вважався найбільшим і найлукавішим в світі на той час. Розкішні декорації внутрішнього світу Титаніка створюють атмосферу розкіші і величі, яка контрастує з трагедією, що наближається. Фільм знаходить баланс між історичною точністю та митцевською свободою, створюючи потужну та емоційну драму.", en: "Titanic (1997) is an epic romantic film that tells the story of the greatest shipwreck in history, intertwined with an unpredictable love story. It stars Kate Winslet (Rose Dewitt Bukater) and Leonardo DiCaprio (Jack Dawson). The characters of the film, from different social strata, fell in love with each other aboard a sinister ship that makes its voyage across the North Atlantic in 1912. Their unsurpassed love story unfolds against the backdrop of a majestic ship, which was considered the largest and most cunning in the world at that time. The luxurious scenery of the inner world of the Titanic creates an atmosphere of luxury and grandeur, which contrasts with the approaching tragedy. The film strikes a balance between historical accuracy and artistic freedom, creating a powerful and emotional drama." }, year: 1997, director: "Джеймс Кемерон", duration: "195 хв" },
            { title: { uk: "Темний лицар", en: "The Dark Knight" }, genres: ["Екшн", "Кримінал", "Трилер"], rating: 4, poster: "https://uakino.me/uploads/posts/2019-12/1575887957-1.jpg", description: { uk: "Черговий фільм, що розповідає про великого і непереможного героя, що приховує обличчя під маскою летючої миші.Бетмен продовжує свою війну зі злочинним світом Готема. І в цьому великому очищенні міста від антигромадських типів у нього є помічники: Джим Гордон і Харві Дент, які прагнуть надати йому всю можливу підтримку.Але, незважаючи на перемоги, ситуація в місті чомусь не поліпшується. Люди з острахом залишають такі безпечні стіни рідних домівок, і ніхто заздалегідь не знає, коли, де і, що найголовніше, кого наздожене наступний удар. Це відбувається тому, що у героя з'явився новий ворог. розумний, хитрий, геніальний злочинець на ім'я Джокер.Починається протистояння, результат якого визначить долю міста. Чи зуміє всемогутній Бетмен перемогти, постійно перебуваючи в ситуації, коли ворог завжди випереджає його?", en: "Another film about a great and invincible hero, hiding his face under the mask of a bat.Batman continues his war with Gotham's underworld. And in this great cleansing of the city from antisocial types, he has assistants: Jim Gordon and Harvey Dent, who are eager to give him all possible support.But, despite the victories, the situation in the city for some reason does not improve. People are afraid to leave such safe walls of their homes, and no one knows in advance when, where and, most importantly, who will catch up with the next blow. This is because the hero has a new enemy. clever, cunning, brilliant criminal named Joker.The confrontation begins, the result of which will determine the fate of the city. Will the almighty Batman be able to win, constantly being in a situation where the enemy is always ahead of him?" }, year: 2008, director: "Крістофер Нолан", duration: "152 хв" },
            { title: { uk: "Зелена миля", en: "The Green Mile" }, genres: ["Драма", "Фентезі", "Кримінал"], rating: 5, poster: "https://uakino.me/uploads/post/The%20Green%20Mile/bqwOUBxtK0KWijnSAR5ykWyQamn.jpg", description: { uk: "Культова драма «Зелена миля» знята за однойменним романом Стівена Кінга. Головну роль в картині виконав неповторний Том Хенкс. Дії фільму розгортаються в тюрмі «Холодна Гора». Одного разу в блок для засуджених до смертної кари поступає новий в'язень - Джон Коффі, засуджений за вбивство маленьких дівчаток. Коффі привертає увагу начальника цього блоку - Пола Еджкомба. За довгі роки роботи він надивився на різних злочинців, і він трохи розбирається в людях. Пол сумнівається у винності Коффі, адже не дивлячись на його страхітливий вигляд, він наділений наївною добротою і людяністю. Так само з часом з'ясовується, що Джон є володарем дивного дару - здатності зцілювати. Пол розуміє, що така людина ніяк не може бути вбивцею. Але що ж робити, і як допомогти йому? На противагу добру завжди виступає злою. Цього разу воно виступить в образі Персі - молодого тюремника, який обожнює робити життя в'язнів нестерпним.", en: "The cult drama Green Mile is based on the novel of the same name by Stephen King. The main role in the film was played by the unique Tom Hanks. The film takes place in the prison Cold Mountain. Once a new prisoner enters the block for those sentenced to death - John Coffey, convicted of killing little girls. Coffey attracts the attention of the head of this block - Paul Edgecombe. Over the years, he has seen enough of various criminals, and he knows a little about people. Paul doubts Coffey's guilt, because despite his frightening appearance, he is endowed with naive kindness and humanity. It also turns out over time that John is the owner of a strange gift - the ability to heal. Paul understands that such a person can not be a killer. But what to do, and how to help him? In contrast, good always acts evil. This time it will act as Percy - a young jailer who loves to make the life of prisoners unbearable." }, year: 1999, director: "Френк Дарабонт", duration: "189 хв" },
            { title: { uk: "Пила", en: "Saw" }, genres: ["Трилер", "Жахи", "Детектив"], rating: 4, poster: "https://uakino.me/uploads/posts/2022-08/1659443996_11.jpg", description: { uk: "Фільм «Пила» став одним з найкасовіших детективних трилерів, що породив серію сиквелів і викликав резонанс в кіносвіті.Двоє незнайомих між собою чоловіків, хлопець на ім'я Адам і доктор Лоренс Гордон, приходять до тями в покинутому підвалі. Їх ноги прикуті сталевими ланцюгами до стін приміщення, а неподалік від них, посередині кімнати, лежить труп ще одного бранця, який абсолютно очевидно наклав на себе руки. В руках самогубці затиснуті револьвер і диктофон, прослухавши запис якого на касеті, в'язні дізнаються, чого чекає від них таємничий і божевільний викрадач. Його послання недвозначне: якщо доктор Гордон цінує своє життя, і, більш того, життя дружини та дітей, то повинен знайти спосіб прикінчити свого товариша по нещастю. На роздуми герою дається всього лише шість годин.Поруч з бранцями лежать ножівки, але перепиляти ланцюги ними не можна. Час спливає швидко, і Гордон з Адамом повинні відшукати спосіб вибратися з підвалу, а заодно з'ясувати, хто так жахливо розважається з ними і який мотив його злодіяння ...", en: "The film Saw became one of the highest grossing detective thrillers, which spawned a series of sequels and caused a resonance in the film world.Two unfamiliar men, a guy named Adam and Dr. Lawrence Gordon, recover in an abandoned basement. Their legs are chained with steel chains to the walls of the room, and not far from them, in the middle of the room, lies the corpse of another prisoner, who obviously committed suicide. In the hands of a suicide, a revolver and a voice recorder are clamped, after listening to the recording of which on the cassette, the prisoners will find out what the mysterious and insane kidnapper expects from them. His message is unequivocal: if Dr. Gordon values   his life, and, moreover, the life of his wife and children, he must find a way to kill his comrade in misfortune. The hero is given only six hours to think.Next to the prisoners are hacksaws, but they can not cut the chains. Time passes quickly, and Gordon and Adam must find a way to get out of the basement, and at the same time find out who is having such terrible fun with them and what is the motive for his atrocities..." }, year: 2004, director: "Джеймс Ван", duration: "103 хв" },
            { title: { uk: "Матриця", en: "The Matrix" }, genres: ["Фантастика", "Екшн", "Трилер"], rating: 5, poster: "https://uakino.me/uploads/post/The%20Matrix/oiQNhGHZ4Zg3fZXMZqf20vzaeuI.jpg", description: { uk: "Томас Андерсон - звичайний хлопець, він обіймає посаду програміста в одній великій компанії і чесно виконує свою роль гвинтика в розгалуженій системі. А вечорами він стає іншим - хакером на ім'я Нео. А відбувається це тому, що Томас незадоволений життям. Ні, не конкретно своїм, а життям взагалі, самим процесом, всесвітом. Думки про те, що все на світі - неправильне, не таке, яким йому належить бути, свердлить його свідомість. А ще Нео сняться незвичайні, тривожні сни, а тому він намагається зовсім не спати, і ще він думає, що потроху позбавляється розуму.Відповісти на це запитання може лише одна людина: розшукуваний хакер Морфіус, який теж прагне до зустрічі. Тому як з світом дійсно сталася невеличка неприємність: він нереальний. І Нео - той, кому судилося повернути все на свої місця...", en: "Thomas Anderson is an ordinary guy, he holds the position of a programmer in one large company and honestly fulfills his role as a cog in an extensive system. And in the evenings he becomes another - a hacker named Neo. And this happens because Thomas is dissatisfied with life. No, not specifically his own, but life in general, the process itself, the universe. The idea that everything in the world is wrong, not as it should be, drills his consciousness. And Neo dreams unusual, disturbing dreams, and therefore he tries not to sleep at all, and he also thinks that he is gradually losing his mind.Only one person can answer this question: the wanted hacker Morphius, who also seeks to meet. Because there really was a little trouble with the world: it is unreal. And Neo is the one who is destined to return everything to its place..." }, year: 1999, director: "Ліллі Вачовскі", duration: "136 хв" },
            { title: { uk: "Список Шиндлера", en: "Schindler's List" }, genres: ["Драма", "Історичний"], rating: 4, poster: "https://uakino.me/uploads/posts/2022-08/1661872001_11.jpg", description: { uk: "У Кракові під час Другої світової війни німці загнали місцевих польських євреїв у переповнене краківське гетто. Оскар Шиндлер, етнічний німець, приїжджає до міста, сподіваючись використати свою вдачу. Член нацистської партії, Шиндлер підкуповує солдатів вермахту (німецькі збройні сили) та офіцерів СС та купляє місцеву фабрику з виготовлення емальованих виробів. Щоб допомогти собі керувати бізнесом, Шиндлер залучає допомогу Іцхака Штерна, місцевого єврейського цивільного, який має контакти з чорноринковими торговцями та єврейською бізнес-спільнотою. Штерн допомагає Шиндлеру організувати фінансування на заводі. Шиндлер підтримує дружні відносини з нацистами і користується багатством та статусом Начальника, а Штерн керує адміністрацією. Шиндлер наймає єврейських робітників, тому що вони коштують менше, а Штерн гарантує, що чим більше євреїв вважатимуться важливими для німецьких військових тим більше вони врятують євреїв від транспортування до концентраційних таборів або загибелі.", en: "In Krakow during World War II, the Germans drove local Polish Jews into a crowded Krakow ghetto. Oskar Schindler, an ethnic German, arrives in the city, hoping to use his luck. A member of the Nazi Party, Schindler bribes Wehrmacht soldiers (German armed forces) and SS officers and buys a local factory for the manufacture of enameled products. To help himself run the business, Schindler enlists the help of Yitzhak Stern, a local Jewish civilian who has contacts with black-market traders and the Jewish business community. Stern helps Schindler arrange financing at the plant. Schindler maintains friendly relations with the Nazis and enjoys the wealth and status of Chief, while Stern leads the administration. Schindler hires Jewish workers because they cost less, and Stern ensures that the more Jews are considered important to the German military, the more they will save Jews from transportation to concentration camps or death." }, year: 1993, director: "Стівен Спілберг", duration: "195 хв" },
            { title: { uk: "Ла-Ла Ленд", en: "La La Land" }, genres: ["Романтика", "Комедія", "Драма"], rating: 4, poster: "https://uakino.me/uploads/post/La%20La%20Land/zlASDDgkIHuNxscUguZP3fD9zzC.jpg", description: { uk: "Нова кінострічка режисера Дем'єна Шазелла - це мюзикл, мелодрама, комедія і історія любові в одній кінострічці. Лос-Анджелес (Ла-Ла Ленд) - дивовижне місце, фабрика мрій і рай на землі в очах багатьох молодих людей. Саме тут двом головним героям кінокартини судилося зустрітися, знайти і втратити своє щастя. Вона - молода амбіційна актриса, яка мріє стати кінозіркою. Працюючи офіціанткою в кав'ярні, вона подає каву знаменитим акторам і актрисам, а весь вільний час дівчина ходить на нескінченні кастинги і прослуховування, не залишаючи надію одного разу отримати свою зоряну роль. Він - молодий і талановитий джазовий піаніст, який мріє стати визнаним композитором і відкрити свій джаз-клуб. Однак він змушений заробляти собі на життя, граючи одні і ті ж невигадливі пісеньки в ресторані.І ось доля зводить їх разом, змушуючи два серця битися з новою силою. Любов повертає в їх життя все найсвітліше і чисте. І головні герої, одухотворені своїми почуттями, з новими силами кидаються до своїх заповітних мрій. Успіх, нарешті, приходить до обох, і закохані з подивом виявляють, що тернистий шлях до слави і можливості, що відкриваються починають вбивати їх любов ...", en: "The new film directed by Damien Chazelle is a musical, melodrama, comedy and love story in one film. Los Angeles (La La Land) is an amazing place, a dream factory and paradise on earth in the eyes of many young people. It was here that the two main characters of the film were destined to meet, find and lose their happiness. She is a young ambitious actress who dreams of becoming a movie star. Working as a waitress in a coffee shop, she serves coffee to famous actors and actresses, and all her free time the girl goes to endless auditions and auditions, leaving no hope of one day getting her star role. He is a young and talented jazz pianist who dreams of becoming a recognized composer and opening his own jazz club. However, he is forced to earn a living by playing the same unpretentious songs in a restaurant.And now fate brings them together, forcing two hearts to fight with a new force. Love returns to their lives all the brightest and cleanest. And the main characters, inspired by their feelings, with new forces rush to their cherished dreams. Success finally comes to both, and lovers are surprised to find that the thorny path to fame and opening opportunities begin to kill their love..." }, year: 2016, director: "Дем’єн Шазелл", duration: "128 хв" },
            { title: { uk: "Форрест Ґамп", en: "Forrest Gump" }, genres: ["Драма", "Романтика"], rating: 4, poster: "https://uakino.me/uploads/post/Forrest%20Gump/rTB92gAU27aJNPzAhqL3ivYGaS7.jpg", description: { uk: "Форрест з дитинства був дивним, дурнуватим, але слухняним і добрим. Таким він і виріс: чуйним і благородним. В юності його відвідала любов, але більше ніж братом для цієї дівчини він бути не може, адже для неї - він всього лише добродушний дурник.В цей час розпочався призов на війну. Форрест потрапив до В'єтнаму. І це розділило їх, але Гамп не забув про свою кохану і писав листи, де описував їй все, що бачить і відбувається в його житті, про свої думки. Форресту пощастило - він не загинув, але крім цього він знайшов друзів, а дружбою його ніхто і ніколи не нагороджував.У нього ще попереду довгий шлях і безліч перемог, а в досягненні поставлених цілей він невтомний. І, може бути, йому вдасться завоювати його єдине кохання?", en: "Forrest from childhood was strange, stupid, but obedient and kind. So he grew up: responsive and noble. In his youth, love visited him, but he cannot be more than a brother for this girl, because for her he is just a good-natured fool.At this time, the call for war began. Forrest came to Vietnam. And this divided them, but Gump did not forget about his beloved and wrote letters where he described to her everything that he sees and happens in his life, about his thoughts. Forrest was lucky - he did not die, but in addition he found friends, and no one ever rewarded him with friendship.He still has a long way to go and many victories, and in achieving his goals he is tireless. And maybe he will be able to win his only love?" }, year: 1994, director: "Роберт Земекіс", duration: "142 хв" },
            { title: { uk: "Втеча з Шоушенка", en: "The Shawshank Redemption" }, genres: ["Драма", "Кримінал"], rating: 5, poster: "https://uakino.me/uploads/post/The%20Shawshank%20Redemption/9NdY1WWLZKTjRAdDHrqWz4IdgdR.jpg", description: { uk: "В основу культової драми «Втеча з Шоушенка» лягла повість Стівена Кінга «Ріта Хейворт з Шоушенка». Дії фільму розгортаються в кінці 50-х років минулого століття. Молодого фінансиста Енді Дюфрейна за подвійне вбивство засуджують до довічного ув'язнення, але він категорично заперечує свою причетність до злочину. Свій термін Енді відправляється відбувати в одну з найвідоміших в'язниць - Шоушенк, з якої ще нікому не вдавалося втекти. У в'язниці хлопець стикається з суворими реаліями тюремного світу, світу, де немає місця жалю, а навколо тільки жорстокість. Енді неодноразово ставав жертвою сексуальних домагань, але він пручається до останнього. Незабаром тюремне життя Дюфрейна трохи налагоджується, і він навіть знаходить собі друга, яким став чорношкірий ув'язнений Ред...Один з небагатьох фільмів - Втеча з Шоушенка - заслуговує перегляду та осмислення", en: "The basis of the cult drama Shawshank Redemption was the story of Stephen King Rita Hayworth from Shawshank. The film takes place in the late 50s of the last century. Young financier Andy Dufresne is sentenced to life imprisonment for a double murder, but he categorically denies any involvement in the crime. Andy goes to serve his term in one of the most famous prisons - Shawshank, from which no one has yet managed to escape. In prison, the guy is faced with the harsh realities of the prison world, a world where there is no place for pity, and only cruelty is around. Andy has repeatedly been the victim of sexual harassment, but he resists to the last. Soon, Dufresne's prison life is improving a little, and he even finds a friend, who became a black prisoner Red... One of the few films - Shawshank Redemption - deserves to be watched and understood" }, year: 1994, director: "Френк Дарабонт", duration: "142 хв" },
            { title: { uk: "Гладіатор", en: "Gladiator" }, genres: ["Екшн", "Драма", "Історичний"], rating: 4, poster: "https://uakino.me/uploads/post/Gladiator/fVF3wyy3DPHBr7lpzS2ScQp2XU7.jpg", description: { uk: "Древній Рим. Час честі і гордості. Час великої експансії, коли залізна хода незламних легіонів трясла основи світу, і царства одне за іншим опускалися перед Римом на коліна. І Рим не мав більш талановитого і, як ніхто інший, відданого справі полководця, ніж Максимус.Але все змінюється і благородство не властиве всім і кожному. Максимус був немов сином для старого імператора, який мав на полководця великі плани. Але імператор помер, а його справжній син не бажає суперництва. А це означає, що Максимус повинен зникнути. Померти, доставивши при цьому задоволення натовпі, борючись на арені.Але Максимус не може дозволити собі померти до того моменту, як його помста не буде завершена.", en: "Ancient Rome. A time of honor and pride. A time of great expansion, when the iron procession of indestructible legions shook the foundations of the world, and the kingdoms one after another fell to Rome on their knees. And Rome had no more talented and, like no other, dedicated commander than Maximus.But everything changes and nobility is not inherent in everyone. Maximus was like a son for the old emperor, who had great plans for the commander. But the emperor died, and his real son does not want rivalry. This means that Maximus must disappear. Die, while giving pleasure to the crowd, fighting in the arena.But Maximus cannot afford to die until his revenge is completed." }, year: 2000, director: "Рідлі Скотт", duration: "155 хв" },
            { title: { uk: "Інтерстеллар", en: "Interstellar" }, genres: ["Фантастика", "Драма", "Пригоди"], rating: 5, poster: "https://uakino.me/uploads/post/Interstellar/t9HT1HX2YTHeZ62IgyGQwxBv5VW.jpg", description: { uk: "В недалекому майбутньому техногенній людській цивілізації прийшов кінець. Землю вразили посухи, які занапастили більшу частину врожаїв. Залишки зернових пожерли бактерії, піщані бурі знищили родючий шар ґрунту. Держави зникли, людство деградувало до сільських комун, розкиданих по Землі - але навіть їх ледь могла прогодувати висохла планета.Фермером довелося стати і головному герою фільму «Інтерстеллар» Куперу. Колишній пілот-випробувач НАСА займався сільським господарством разом з тестем, сином і дочкою. Одного разу Купер зауважив якусь особливість: ферму покривали невідомі радіохвилі. Відшукавши їх джерело, Купер виявив секретну лабораторію НАСА. Там він зустрів професора Амелію Бранд.Професор розповіла Куперу про теорію червоточини, в якій криється порятунок людства. Одна з червоточин знаходиться на орбіті Сатурна і, можливо, веде до світів, придатних для життя. Група Бранд уже побудувала Інтерстеллар - корабель для польоту до Сатурна. Купер стає пілотом експериментального корабля.", en: "In the near future, man-made human civilization has come to an end. The land was affected by droughts, which ruined most of the harvests. The remains of grain devoured bacteria, sandstorms destroyed the fertile soil layer. States disappeared, humanity degraded to rural communes scattered across the Earth - but even they could barely be fed by a dried-up planet.The farmer had to become the main character of the film Interstellar Cooper. The former NASA test pilot farmed with his father-in-law, son and daughter. Once Cooper noticed a feature: the farm was covered with unknown radio waves. Finding their source, Cooper discovered a secret NASA laboratory. There he met Professor Amelia Brand.The professor told Cooper about the wormhole theory, in which lies the salvation of mankind. One of the wormholes is in orbit of Saturn and possibly leads to worlds suitable for life. The Brand group has already built Interstellar - a ship to fly to Saturn. Cooper becomes the pilot of an experimental ship." }, year: 2014, director: "Крістофер Нолан", duration: "169 хв" },
            { title: { uk: "Пірати Карибського Моря: Прокляття чорної перлини", en: "Pirates of the Caribbean: The Curse of the Black Pearl" }, genres: ["Пригоди", "Фентезі", "Екшн"], rating: 4, poster: "https://uakino.me/uploads/post/Pirates%20of%20the%20Caribbean_%20The%20Curse%20of%20the%20Black%20Pearl/rkmMyi5CG6g9qZfVEPiEsYy7w1o.jpg", description: { uk: "Неймовірно цікавий і смішний фільм від компанії «Walt Disney Company», дії якого переносять глядача в XVIII століття, на Кариби. Головний герой фільму Джек Горобець - пірат, який любить пригоди, капітан корабля «Чорна Перлина». Як і у будь-якого пірата, у нього є вороги, і цей ворог капітан Барбосса, який одного разу зміг відібрати його корабель.Барбосса робить напад на Порт Рояль, при цьому він викрадає дочку місцевого губернатора Елізабет. Уїлл Тернер, закоханий в Елізабет, разом з Джеком Горобцем, для якого це шанс поквитатися з Барбоссою, і повернути свій корабель, відправляються на її пошуки.Фільм буде особливо актуальний для перегляду навіть зараз, адже Джонні Депп більше не гратиме легендарного пірата у наступних фільмів і перед майбутнім ремейком варто передивитися легендарну кінофраншизу.", en: "Incredibly interesting and funny film from the company Walt Disney Company, whose actions take the viewer to the 18th century, to the Caribbean. The protagonist of the film Jack Sparrow is a pirate who loves adventure, the captain of the ship Black Pearl. Like any pirate, he has enemies, and this enemy is Captain Barbossa, who once was able to take his ship.Barbossa makes an attack on Port Royal, while he kidnaps the daughter of the local governor Elizabeth. Will Turner, in love with Elizabeth, along with Jack Sparrow, for whom this is a chance to get even with Barbossa, and return his ship, go in search of her.The film will be especially relevant for viewing even now, because Johnny Depp will no longer play the legendary pirate in subsequent films and before the upcoming remake it is worth watching the legendary film franchise." }, year: 2003, director: "Гор Вербінскі", duration: "143 хв" },
            { title: { uk: "Володар перснів: Братство персня", en: "The Lord of the Rings: The Fellowship of the Ring" }, genres: ["Фентезі", "Пригоди", "Драма"], rating: 5, poster: "https://uakino.me/uploads/post/The%20Lord%20of%20the%20Rings_%20The%20Fellowship%20of%20the%20Ring/x97EnFVPnUY6QquSNSuuYsfNqpb.jpg", description: { uk: "Багато років тому темний повелитель Саурон втратив кільце, що дає величезну могутність, і тепер намагається його повернути. Хоббіт Більбо Беггінс випадково знаходить бажане кільце, завдяки чому прожив, не знаючи про його велику силу, до 111 років.Чарівник Гендальф передає річ Фродо, племіннику Більбо, який стоїчно справляється з силою, яку воно йому дає. Разом зі своїм другом Семом вони відправляються в небезпечні пригоди, щоб стерти з лиця землі кільце, яке приносить одні тільки нещастя. До них приходять на допомогу ельфи, хоббіти і енти. Безліч випробувань доведеться пройти головним героям: спокуса кільцем, голод, недовіра, позбавлення під час усієї подорожі. Перед нами відкриваються красиві пейзажі, а музика, яка супроводжує фільм, просто зачаровує.", en: "Many years ago, the dark lord Sauron lost the ring, which gives great power, and is now trying to return it. The hobbit Bilbo Baggins accidentally finds the desired ring, thanks to which he lived, not knowing about his great strength, until 111 years.The wizard Gandalf hands the thing to Frodo, Bilbo's nephew, who stoically copes with the power it gives him. Together with his friend Sam, they go on dangerous adventures to wipe out the ring, which brings only misfortune. Elves, hobbits and ents come to their aid. Many tests will have to pass the main characters: temptation ring, hunger, distrust, deprivation during the entire journey. Beautiful landscapes open before us, and the music that accompanies the film is simply fascinating." }, year: 2001, director: "Пітер Джексон", duration: "178 хв" },
            { title: { uk: "Бійцівський клуб", en: "Fight Club" }, genres: ["Трилер", "Драма", "Кримінал"], rating: 4, poster: "https://uakino.me/uploads/post/Fight%20Club/imCVaunF2Wl3ZRYOH1XB047sTyb.jpg", description: { uk: "При спільному виробництві США та Німеччини фільм вийшов в прокат в 1999 році. Фільм досить жорстокий, в ньому присутні психологічні моменти, сірого реалізму і жорстоких сутичок в рингу. Екранізація вийшла вкрай хорошою, і мабуть, не розчарувала шанувальників літературного твору, адже фільм знімався за однойменною книгою Чака Паланіка. Всім глядачам сподобаються ефектні і динамічні події. А несподівана розв'язка, яку неможливо передбачити повалить в шок.Сюжет фільму «Бійцівський клуб»: оповідачем історії є типовий яппі. Йому тридцять і він найманий робітник. Так само він мучиться від безсоння, і не може визначити де сон, а де дійсність. Замість ліків лікар йому пропонує зайнятися спортом і періодично відвідувати групу хворих на рак яєчок. Відвідування даної групи має довести оповідачеві, що таке справжня мука, і щоб він зрозумів що його безсоння в порівнянні з раком сущі дрібниці. Так само наш оповідач мріє про переломний момент, який переверне все його життя. Одного разу в барі він знайомитися з Тайлером Дьорденом, торговцем милом, який володіє значним даром ...", en: "With the joint production of the USA and Germany, the film was released in 1999. The film is quite cruel, it contains psychological moments, gray realism and brutal fights in the ring. The film adaptation turned out to be extremely good, and apparently did not disappoint fans of the literary work, because the film was shot based on the book of the same name by Chuck Palahniuk. All viewers will love the spectacular and dynamic events. And an unexpected denouement, which is impossible to predict will throw into shock.The plot of the film Fight Club: the narrator of the story is a typical yuppie. He is thirty and he is an employee. He also suffers from insomnia, and can not determine where the dream and where the reality. Instead of drugs, the doctor offers him to play sports and periodically visit a group of patients with testicular cancer. A visit to this group should prove to the narrator what real torment is, and so that he understands that his insomnia is a trifle compared to cancer. Also, our narrator dreams of a turning point that will turn his whole life around. Once in a bar he met Tyler Durden, a soap merchant who has a significant gift..." }, year: 1999, director: "Девід Фінчер", duration: "139 хв" },
            { title: { uk: "Зоряні війни: Епізод IV - Нова надія", en: "Star Wars: Episode IV - A New Hope" }, genres: ["Фантастика", "Пригоди", "Екшн"], rating: 4, poster: "https://uakino.me/uploads/posts/2024-08/novanadiia.jpg", description: { uk: "Дії фільму розгортаються після жахливої ​​війни між Республікою і ситхами. Галактикою править Імперія, а всі джедаї майже знищені. На пустельній планеті Татуїн, де невеликі міста потопають у барханах піску, старіючий лицар Обі-Ван Кенобі нібито випадково стикається з простим хлопцем Люком Скайуокером і рятує його від неприємностей з місцевим патрулем. Увечері, коли вони добираються до хатини хлопчини, чоловік зізнається, що шукав його, адже Люк - майбутній джедай, в якому тече могутня сила. Молода людина, головний герой саги Зоряні війни: Епізод 4 - Нова надія, заручившись підтримкою спритного льотчика-контрабандиста Хана Соло відправляється, в небезпечну подорож, щоб знайти Принцесу Лею. Дівчина є керівницею руху повстанців, але зараз вона в полоні у потворного прибульця Джабби. Але це лише одна з дрібних колізій, з якими команді доведеться зіткнутися до того, як вони вийдуть на Дарта Вейдера - праву руку Імператора і командувача найпотужнішою зброєю у всесвіті - славнозвісною Зіркою Смерті. Вона здатна в один постріл зруйнувати будь-яку планету, і мало що може перешкодити лиходіям знищити будь-який об'єкт в галактиці.", en: "The film takes place after a terrible war between the Republic and the Sith. The Empire rules the galaxy, and all the Jedi are almost destroyed. On the desert planet Tatooine, where small towns are buried in sand dunes, the aging knight Obi-Wan Kenobi allegedly accidentally encounters a simple guy Luke Skywalker and saves him from trouble with a local patrol. In the evening, when they get to the boy's hut, the man admits that he was looking for him, because Luke is the future Jedi, in which a powerful force flows. Young man, the protagonist of the saga Star Wars: Episode 4 - A new hope, enlisting the support of the clever pilot-smuggler Han Solo, sets off on a dangerous journey to find Princess Leia. The girl is the leader of the rebel movement, but now she is captured by the ugly alien Jabba. But this is just one of the minor collisions that the team will have to face before they go to Darth Vader - the right hand of the Emperor and the commander of the most powerful weapon in the universe - the famous Death Star. It is capable of destroying any planet in one shot, and there is little to prevent the villains from destroying any object in the galaxy." }, year: 1977, director: "Джордж Лукас", duration: "121 хв" },
            { title: { uk: "Аватар", en: "Avatar" }, genres: ["Фантастика", "Пригоди", "Екшн"], rating: 5, poster: "https://uakino.me/uploads/posts/2022-09/1663851044_11.jpg", description: { uk: "Аватар - це фільм, який змінив уявлення про кіно і 3D технологіях, створений Джеймсом Кемероном, режисером, здатним творити чудеса.Сюжет фільму занурює нас в незвіданий фантастичний світ іншої планети, населений представниками іншого розуму.Нездатний після минулих поранень самостійно ходити морський піхотинець Джейк повинен відправитися до далекої зірки. Його мета - розвідка на чужій території. Завдання експедиції - відшукати необхідні людству ресурси.Однак коли Джейк ближче знайомиться з аборигенами, він починає розуміти, що людство йде неправильним шляхом, випускаючи дуже важливі речі. І зараз може зруйнувати крихкий баланс життя тут заради меркантильних інтересів. Тепер Джейк зобов'язаний вибрати сторону, на якій доведеться битися.", en: "Avatar is a film that changed the concept of cinema and 3D technology, created by James Cameron, a director who can work wonders. The plot of the film plunges us into the unknown fantasy world of another planet, inhabited by representatives of another mind. Unable to walk independently after past wounds, Marine Jake must go to a distant star. His goal is intelligence in a foreign territory. The task of the expedition is to find the resources necessary for humanity. However, when Jake gets closer to the natives, he begins to understand that humanity is going the wrong way, releasing very important things. And now it can destroy the fragile balance of life here for the sake of mercantile interests. Now Jake must choose the side on which to fight." }, year: 2009, director: "Джеймс Кемерон", duration: "162 хв" },
            { title: { uk: "Месники", en: "The Avengers" }, genres: ["Екшн", "Фантастика", "Пригоди"], rating: 4, poster: "https://uakino.me/uploads/posts/2017-11/1509517420_1496619666_1.jpg", description: { uk: "Коли над людством суворо нависла жахлива небезпека, що загрожує повним знищенням життя на нашій квітучій планеті, тільки згуртована команда, що складається зі справжніх героїв, здатна зупинити загрозу. Саме про це розповідає новий пригодницький повнометражний фільм «Месники».Неймовірна небезпека виникла буквально з нізвідки, і ніхто толком не може зрозуміти, хто ж цей таємничий ворог. Але спеціально створене управління під назвою Щ.И.Т., покликане спочатку підтримувати мир на Землі, стало єдиною офіційною організацією, яка взяла на себе організацію оборони всієї планети.З цією метою було створено загін, що вперше об'єднав всіх супергероїв відомих коміксів. Захисники всіх пригноблених, люті борці за правду, такі як Халк, Залізна людина, Капітан Америка, Тор і інші герої найпопулярніших творів останніх років, тепер разом виступлять на стороні добра і справедливості. Хіба знайдеться у всесвіті сила, здатна зупинити подібну команду?А зоряний акторський склад, геніальність авторів коміксів і майстерність знімальної групи Marvel Studios робить цей фільм не тільки захоплюючим, але й неймовірно видовищним.", en: "When a terrible danger looms over humanity, threatening the complete destruction of life on our prosperous planet, only a cohesive team consisting of real heroes is able to stop the threat. This is what the new adventure feature film The Avengers tells about. An incredible danger arose literally from nowhere, and no one really can understand who this mysterious enemy is. But a specially created department called S.H.I.E.L.D., designed initially to maintain peace on Earth, became the only official organization that took over the organization of the defense of the entire planet. To this end, a detachment was created, for the first time uniting all the superheroes of famous comics. Defenders of all the oppressed, fierce fighters for truth, such as the Hulk, Iron Man, Captain America, Thor and other heroes of the most popular works of recent years, will now come together on the side of good and justice. Is there a force in the universe that can stop such a team? And the star cast, the genius of the comic book authors and the skill of the crew of Marvel Studios makes this film not only exciting, but also incredibly spectacular." }, year: 2012, director: "Джосс Відон", duration: "143 хв" }
        ];

        let series = JSON.parse(localStorage.getItem('series')) || [
            { title: { uk: "Гра престолів", en: "Game of Thrones" }, genres: ["Фентезі", "Драма", "Пригоди"], rating: 5, poster: "https://uakino.me/uploads/posts/2024-08/prestoly1.jpg", description: { uk: "Час літа тривав кілька десятиліть і підійшов до кінця. Скоро настане дуже холодна зима. В цей час назріває змова навколо 7 королівств, на чолі яких знаходиться чоловік на Залізному троні. У непростий для королівства час Король просить допомоги у відданого друга Старка, призначивши його Десницею Короля. Інтриги змовників в фентезі серіалі «Гра престолів» розвинулись занадто сильно, так як вони бажали скинути Короля з трону. Скоро настають великі зміни. Іншою проблемою є давнє зло, від якого захищає стіна, але взимку вона не зможе допомогти. За стіною з льоду панує Король ночі, який є холодною істотою і володіє цілою армією зомбі-мерців, яку практично неможливо зупинити. Тільки один меч з валірійської сталі і драконського скла здатний вбити цю страшну істоту. Ковалі не можуть зробити ще таких мечів, так як ці матеріали дуже рідкісні і знайти їх дуже важко. Сім'я роду Старків з давніх-давен вважалася захисниками Півночі і тепер окремим її членам потрібно знайти спосіб не тільки протистояти злу, але й інтригам навколо трону. Проти армії мерців потрібно за всяку ціну вистояти.", en: "The time of summer lasted several decades and came to an end. Very cold winter is coming soon. At this time, a conspiracy is brewing around 7 kingdoms, headed by a man on the Iron Throne. In a difficult time for the kingdom, the King asks for help from a devoted friend of Stark, appointing him the Hand of the King. The intrigues of the conspirators in the fantasy series Game of Thrones developed too much, since they wanted to overthrow the King from the throne. Big changes are coming soon. Another problem is the ancient evil, which protects the wall, but in winter it will not be able to help. Behind the wall of ice reigns the King of the Night, who is a cold creature and owns a whole army of zombie dead, which is almost impossible to stop. Only one sword of Valyrian steel and dragon glass can kill this terrible creature. Blacksmiths cannot make such swords, as these materials are very rare and very difficult to find. The Stark family has long been considered the defenders of the North and now its individual members need to find a way not only to resist evil, but also intrigues around the throne. Against the army of the dead must stand at all costs." }, year: 2011, director: "Девід Беніофф, Д.Б. Вайсс", duration: "60 хв/серія" },
            { title: { uk: "Дивні Дива", en: "Stranger Things" }, genres: ["Фантастика", "Жахи", "Драма"], rating: 4, poster: "https://uakino.me/uploads/post/StrangerThings/a8Js1IvNo1v2jm8bpd18pXbJ26T.jpg", description: { uk: "Події серіалу розвиваються в вісімдесятих роках. Ця дивна історія сталася в невеликому містечку Монтаук. Центральний персонаж серіалу маленький хлопчик Уїлл. Одного разу він разом зі своїми однолітками катався на велосипеді. Було вже пізно, хлопець заїхав трохи далі від міста і зник. Друзі одразу повідомили дорослим і кинулися його шукати. Але в підсумку пошуки зовсім не увінчалися успіхом. Тільки діти змогли знайти на місці, де пропав їх одну дивну дівчинку. Сховавши її від дорослих вони розпитують про зникнення Уїлла. Тільки вона знає хоч щось про цю подію і ще про багато інших неприємностях. Тим часом в місті починають відбуватися дивні події, люди налякані, дивні істоти з'являються то тут, то там. Чи зможуть герої уберегти місто від небезпеки.", en: "The events of the series develop in the eighties. This strange story happened in the small town of Montauk. The central character of the series is the little boy Will. Once he and his peers rode a bicycle. It was too late, the guy went a little further from the city and disappeared. Friends immediately notified the adults and rushed to look for him. But in the end, the search was completely unsuccessful. Only children could find where one strange girl disappeared. Having hidden her from adults, they ask about the disappearance of Will. only she knows anything about this event and many other troubles. Meanwhile, strange events begin to occur in the city, people are frightened, strange creatures appear here and there. Can the heroes protect the city from danger." }, year: 2016, director: "Брати Даффер", duration: "50 хв/серія" },
            { title: { uk: "Відьмак", en: "The Witcher" }, genres: ["Фентезі", "Пригоди", "Драма"], rating: 4, poster: "https://uakino.me/uploads/posts/2022-05/1653135423_witcherposterukr_md.jpg", description: { uk: "Всі дії в американському телесеріалі відбуваються в той час коли народом правили королі; існували чарівники; дракони, які за звичкою продовжували красти принцес. Крім такого люду існували дуже незвичайні чудовиська і небезпечні монстри, які знищували людей і все живе на землі. Наш головний персонаж пройшов мутацію в дитинстві, в результаті чого здобув нелюдську силу, швидкість і регенерацію. Сміливець був мисливцем на всяку нечисть і застосовуючи магію заклинань міг перемогти будь-яке зло.Геральт завжди ризикував життям безвідмовно, адже за гроші, він готовий полювати і вбивати кровожерливих монстрів. Чаклун завжди намагався витримувати професійну етику і не втручатися в політичні інтриги і справи правителів. Одного разу йому довелося стати на захист населення маленького королівства у якого викрали берегиню вічного вогню їх королеву. Наш герой вирушає в нелегку кругосвітню подорож на пошуки правительки, де попутно зустрічає свою любов. Тепер він несе відповідальність не тільки за виконання свого завдання, а й за збереження життя коханої жінки.", en: "All actions in the American television series take place at a time when kings ruled the people; there were wizards; dragons, who out of habit continued to steal princesses. In addition to such people, there were very unusual monsters and dangerous monsters that destroyed people and all life on earth. Our main character went through a mutation in childhood, as a result of which he gained inhuman strength, speed and regeneration. The brave man was a hunter for all evil spirits and using the magic of spells could defeat any evil. Geralt always risked his life without fail, because for money, he is ready to hunt and kill bloodthirsty monsters. The sorcerer always tried to maintain professional ethics and not to interfere in the political intrigues and affairs of the rulers. Once he had to defend the population of a small kingdom from which the guardian of the eternal flame of their queen was kidnapped. Our hero goes on a difficult trip around the world in search of the ruler, where he meets his love along the way. Now he is responsible not only for the fulfillment of his task, but also for preserving the life of his beloved woman." }, year: 2019, director: "Лорен Шмідт Гіссріх", duration: "60 хв/серія" },
            { title: { uk: "Чорнобиль", en: "Chernobyl" }, genres: ["Драма", "Історичний"], rating: 5, poster: "https://uakino.me/uploads/posts/2019-05/1557237312-1.jpg", description: { uk: "Серіал Чорнобиль оповідає про події 1986 року. Ця катастрофа вважається однією з найбільших в історії людства. У центрі уваги сюжету опиняються розповіді реальних учасників тих подій, які залишилися живі після вибуху на найбільшій електростанції країни, і людей, які займали керівні посади. Всі вони діляться своїми ідеями та поглядами на тему події, проводять аналіз подій, розповідають про можливі наслідки і вплив цього жахливого вибуху на сучасне життя простих людей. Хто б що не говорив, але у кожного з дійових осіб своє бачення того, що відбувається. Найбільш цікавими виявляються розповіді, оповідки та ідеї Уляни Хомюк, фізика-ядерника, яка хоче зрозуміти, що ж саме могло призвести до настільки жахливих подій. Борис Щербин намагається відшукати причину події в безграмотному керівництві, а Валерій Легасов, як провідний учений, багато років провів за розгадками причин Чорнобильської катастрофи. Кожен з оповідачів по-своєму бачить події, що відбулися і ділиться із глядачами власними поглядами і історіями. Але що ж відбулося насправді? З кількох оповідань складеться одне і розкриє перед публікою великі таємниці сумних подій минулого.", en: "The series Chernobyl tells about the events of 1986. This disaster is considered one of the largest in the history of mankind. The plot focuses on the stories of real participants in those events who remained alive after the explosion at the country's largest power plant, and people who held leadership positions. All of them share their ideas and views on the topic of what happened, analyze events, talk about the possible consequences and impact of this terrible explosion on the modern life of ordinary people. Whoever says anything, but each of the actors has his own vision of what is happening. The most interesting are the stories, stories and ideas of Ulyana Khomyuk, a nuclear physicist who wants to understand what exactly could lead to such terrible events. Boris Shcherbin is trying to find the cause of what happened in the illiterate leadership, and Valery Legasov, as a leading scientist, spent many years unraveling the causes of the Chernobyl disaster. Each of the narrators sees the events in his own way and shares his own views and stories with the audience. But what really happened? One will consist of several stories and reveal to the public the great secrets of the sad events of the past." }, year: 2019, director: "Крейг Мейзін", duration: "65 хв/серія" },
            { title: { uk: "Локі", en: "Loki" }, genres: ["Фантастика", "Пригоди", "Фентезі"], rating: 4, poster: "https://uakino.me/uploads/posts/2021-06/1623314455_1623314404_3b537583da4f7d77f.jpg", description: { uk: "Серіал «Локі» - важлива частина всесвіту Марвел, своєрідний місток між попередніми та майбутніми фільмами франшизи. Сюжет стартує в момент, коли Месники роблять зухвалу подорож в минуле, щоб змінити заподіяне Таносом зло. Одна з цілей команди - той день, коли Локі вкрав Тессеракт і закликав на Землю інопланетну армію. Хитрий брат Тора і в цей раз не упустив свого. Він знову поцупив артефакт і зник з ним у новій часовій лінії, яку ви побачите в мультивсесвіті. Локі випав з основної гілки подій всесвіту Марвел, але ось здобути повну свободу дій йому не вдалося.У першій серії глядачі побачать, що Локі потрапив в організацію під назвою «Управління часовими змінами», або просто УЧЗ. Ця контора існує поза часом і простором. Співробітники організації стежать, щоб у всіх альтернативних гілках історії не відбувалося нічого, що загрожує самій суті світобудови. Головний герой серіалу «Loki» потрапляє під повний контроль УЧЗ. Його куратором стає досвідчений і несподівано холоднокровний детектив Мобіус. Він не реагує на провокації спритного бога і спокійно пояснює йому ситуацію: або Локі співпрацює з УЧЗ, або буде стертий з реальності.", en: "The Loki series is an important part of the Marvel Universe, a kind of bridge between the previous and future films of the franchise. The plot starts at the moment when the Avengers make a daring journey into the past to change the evil caused by Thanos. One of the goals of the team is the day when Loki stole the Tesseract and called an alien army to Earth. The cunning brother of Thor and this time did not miss his. He stole the artifact again and disappeared with it in a new timeline you'll see in the multiverse. Loki fell out of the main branch of the events of the Marvel universe, but he failed to gain complete freedom of action.In the first episode, viewers will see that Loki got into an organization called Time Change Management, or simply UCHZ. This office exists outside of time and space. Employees of the organization ensure that nothing happens in all alternative branches of history that threatens the very essence of the universe. The protagonist of the series Loki falls under the full control of the UCHZ. His curator is an experienced and unexpectedly cold-blooded detective Mobius. He does not react to the provocations of the dexterous god and calmly explains the situation to him: either Loki cooperates with the UCHZ, or will be erased from reality." }, year: 2020, director: "Кріс Ван Дусен", duration: "60 хв/серія" },
            { title: { uk: "Мандалорець", en: "The Mandalorian" }, genres: ["Фантастика", "Пригоди", "Екшн"], rating: 4, poster: "https://uakino.me/uploads/posts/2020-10/1604146673-11.jpg", description: { uk: "Галактична імперія впала. Здавалося б, один з найсильніших і непохитних бастіонів цього світу був розбитий в кінцівці проекту Повернення джедая. Багато шанувальників серії знають, що настають події, ознаменовані появою Першого Ордена, проте сюжет Пробудження сили чекає глядачів трохи пізніше, а поки ми станемо свідками історії мандалоріанця, який поодинці працює за наймом і виконує небезпечні завдання. Його пригоди відбуваються десь на краю галактики, де діють свої правила і закони. Довгі руки управлінців Нової Республіки не в силах дістатися до цих диких земель ...", en: "The galactic empire collapsed. It would seem that one of the strongest and unshakable bastions of this world was defeated in the end of the project Return of the Jedi. Many fans of the series know that events are coming, marked by the appearance of the First Order, but the plot of the Awakening of Power awaits the audience a little later, but for now we will witness the history of the Mandalorian, who alone works for hire and performs dangerous tasks. His adventures take place somewhere on the edge of the galaxy, where his rules and laws apply. The long arms of the managers of the New Republic are unable to reach these wild lands..." }, year: 2019, director: "Джон Фавро", duration: "40 хв/серія" },
            { title: { uk: "Пуститися берега", en: "Breaking Bad" }, genres: ["Драма", "Кримінал", "Трилер"], rating: 5, poster: "https://uakino.me/uploads/post/Breaking%20Bad/nPv2DbunBOK2QZ4SNpWYeUp1ba3.jpg", description: { uk: "Breaking Bad - телесеріал, створений американським продюсером Вінсом Гіліганом - творцем, який прославився в Україні серіалом «X-files». Сюжет серіалу про хіміка Уолтере Уайта, який хворий на рак та займається синтезом метамфетаміну для забезпечення майбутньої сім'ї. Всі події відбуваються в Альбукерке, Нью-Мексико. Серіал має на даний момент 5 повноцінних сезони і встиг отримати чотири номінації Еммі в 2008, 2009 і 2010 роках, номінація Кращий актор драматичного серіалу.Уолтер - невиліковно хворий викладач хімії, який утримує сина-інваліда і дружину, що чекає ще одну дитину. Через брак грошей він влаштовується на автомийку, де його висміюють власні учні. Одного разу в облаві на будинок, де імовірно знаходилася лабораторія з виготовлення метамфетаміну, він впізнає в особі втікача дилера свого колишнього студента. Уолту втрачати нічого, тому він вирішив зайнятися бізнесом зі своїм новим напарником, виготовляючи і продаючи метамфетамін. Вони знімають трейлер, де відкриють лабораторію по його виробництву.", en: "Breaking Bad is a television series created by American producer Vince Gilligan, the creator of the X-files series that became famous in Ukraine. The plot of the series is about the chemist Walter White, who has cancer and is engaged in the synthesis of methamphetamine to provide for the future family. All events take place in Albuquerque, New Mexico. The series currently has 5 full seasons and managed to receive four Emmy nominations in 2008, 2009 and 2010, the nomination for Best Actor in a Drama Series. Walter is a terminally ill chemistry teacher who holds his disabled son and wife, who is expecting another child. Due to lack of money, he gets a job at a car wash, where he is ridiculed by his own students. Once, in a raid on a house where a methamphetamine laboratory was supposedly located, he recognizes his former student in the face of a fugitive dealer. Walt had nothing to lose, so he decided to go into business with his new partner, making and selling methamphetamine. They shoot a trailer where they will open a laboratory for its production." }, year: 2008, director: "Вінс Гілліган", duration: "45 хв/серія" },
            { title: { uk: "Паперовий будинок", en: "Money Heist" }, genres: ["Трилер", "Кримінал", "Драма"], rating: 4, poster: "https://uakino.me/uploads/posts/2020-05/159026211785_money_heist.jpg", description: { uk: "Іспанія. Група бандитів збирається напасти на Монетний двір. Над організацією цього злочину працюють найрозумніші і найталановитіші злочинці країни. Професор - відомий в кримінальному світі авторитет, котрий працював уже над багатьма справами. Щоправда, тепер його чекає особливий виклик, складання особливого плану, неймовірно складна робота! Головний герой робить усе можливе, щоб зібрати команду з найвидатніших злочинців, кожен з яких справжній профі в своїй сфері. Негідники планують отримати два з половиною мільйони євро з цієї справи. У них великі плани і надії на облаву, адже підготовка проходить без будь-яких ускладнень. Але, головний будинок Монетного двору вельми і вельми складне по плануванню приміщення, яке просто напхане системами безпеки. Ватажок цієї злочинної новоорганізованої банди відразу ж узяв на себе відповідальність за планування справи. Злочинці захоплюють заручників, щоб відвернути увагу поліції. На екскурсії в монетному дворі виявилися шістдесят сім чоловік, багато з яких - прості школярі. Градус напруги зростає з кожною хвилиною. Полонені люди уже просто не можуть терпіти. Що ж буде далі?", en: "Spain. A group of bandits is about to attack the Mint. The most intelligent and talented criminals in the country are working on organizing this crime. The professor is a well-known authority in the criminal world, who has already worked on many cases. True, now he is waiting for a special challenge, drawing up a special plan, incredibly difficult work! The main character does everything possible to assemble a team of the greatest criminals, each of whom is a real pro in his field. Scoundrels plan to get two and a half million euros from this case. They have big plans and hopes for a raid, because the preparation takes place without any complications. But, the main house of the Mint is very, very difficult to plan the room, which is simply crammed with security systems. The leader of this criminal newly organized gang immediately took responsibility for planning the case. Criminals take hostages to distract the attention of the police. On an excursion in the mint were sixty-seven people, many of whom are ordinary schoolchildren. The degree of tension increases every minute. Captured people simply can not stand. What will happen next?" }, year: 2017, director: "Алекс Піна", duration: "50 хв/серія" },
            { title: { uk: "Офіс", en: "The Office" }, genres: ["Комедія"], rating: 5, poster: "https://uakino.me/uploads/posts/2022-07/1656953229_1.png", description: { uk: "В офісі паперової компанії Дандер Міффлін проходить щоденна нудна робота жменьки найманих рабів. Джим розумний, але похмурий жартівник. Дуайт - амбітний кар'єрист. Пем — реєстраторка, яка намагається фліртувати із Джимом, незважаючи на свої заручини. Центром компанії є Майкл Скотт, огидний бос, егоїст, який не може відкрити рота, не викидаючи образ. Хлопець вважає себе лідером, який спілкується на рівних із близькими за духом людьми: По-перше, я друг, - каже він їм, - а потім - начальник. Насправді він блазень і садист. Одного разу він жартома доводить Пем до сліз, кажучи, що її звільнили.", en: "In the office of the paper company Dunder Mifflin, the daily boring work of a handful of hired slaves takes place. Jim is a clever but gloomy joker. Dwight is an ambitious careerist. Pam is a receptionist who tries to flirt with Jim despite her engagement. The center of the company is Michael Scott, a disgusting boss, an egoist who cannot open his mouth without throwing out insults. The guy considers himself a leader who communicates on an equal footing with people close in spirit: First, I am a friend, he tells them, and then - a boss. In fact, he is a jester and a sadist. Once he jokingly brings Pam to tears, saying that she was fired." }, year: 2005, director: "Грег Деніелс", duration: "22 хв/серія" },
            { title: { uk: "Шерлок", en: "Sherlock" }, genres: ["Детектив", "Драма", "Кримінал"], rating: 5, poster: "https://uakino.me/uploads/posts/2024-08/sherlok.jpg", description: { uk: "Шерлок Холмс тут називає себе «консультуючим детективом» і завжди не забуває з собою з собою багатофункціональний комунікатор. Люлька, яку курив звичний для нас Холмс, в серіалі замінена нікотиновим пластиром. Ватсон, ветеран операції в Афганістані, не може звикнути до мирного життя і за порадою психоаналітика починає публікувати замітки про їх з Холмсом розслідування в особистому блозі. У розслідуваннях їм допомагає інспектор Лестрейд, який, на відміну від свого оригіналу, тут високо цінує вміння приватного нишпорки. Як і в оповіданнях сера Конана Дойла, головним їх супротивником є загадковий лиходій Моріарті.У найбільш хвилюючий момент їх протистояння і обривається перший сезон серіалу, що складається всього з трьох серій. Другий сезон виявився не менш захоплюючим. Тому не дивно, що серіал продовжили і на 3 і на 4 сезон.", en: "Sherlock Holmes here calls himself a consulting detective and always does not forget with him a multifunctional communicator. The pipe, which Holmes, familiar to us, smoked, was replaced in the series with a nicotine patch. Watson, a veteran of the operation in Afghanistan, cannot get used to a peaceful life and, on the advice of a psychoanalyst, begins to publish notes about his investigation with Holmes on his personal blog. In the investigations, they are assisted by Inspector Lestrade, who, unlike his original, here highly appreciates the ability of a private scythe. As in the stories of Sir Conan Doyle, their main opponent is the mysterious villain Moriarty. At the most exciting moment of their confrontation, the first season of the series, consisting of only three episodes, ends. The second season was no less exciting. Therefore, it is not surprising that the series was extended for both season 3 and 4." }, year: 2010, director: "Марк Гатісс, Стівен Моффат", duration: "90 хв/серія" },
            { title: { uk: "Ходячі мерці", en: "The Walking Dead" }, genres: ["Жахи", "Драма", "Трилер"], rating: 4, poster: "https://uakino.me/uploads/posts/2022-04/1650650842_khodyach-merts-_550.jpg", description: { uk: "Це тільки початок гостросюжетної історії, яка розтягнеться на кілька сезонів. Глядачів очікує знайомство з головними героями популярного серіалу: американським шерифом Ріком Граймсом, його сім'єю і тими декількома нещасними, до смерті переляканими людьми, яким вдалося не тільки залишитися в живих, але і не заразитися тим страшним вірусом, що влаштував на землі зомбі - апокаліпсис. Головний герой, ймовірно, єдиний вцілілий правоохоронець, наділений офіційними повноваженнями, бере на себе повноваження в контролю дотримання базових прав людства, намагається хоч якось підтримувати порядок в групі, яка тиняється в пошуках людей і безпечного місця проживання. Але через страх виникають постійні конфлікти, члени команди гинуть практично щодня. І тоді люблячий батько, чоловік і людина закону приймає рішення покинути цю команду, та знайти своє місце в новому світі пост-апокаліпсису.", en: "This is only the beginning of an action-packed story that will stretch for several seasons. The audience will get acquainted with the main characters of the popular series: the American sheriff Rick Grimes, his family and those few unfortunate, to the death of frightened people who managed not only to stay alive, but also not to get infected with the terrible virus that arranged on the ground zombies - apocalypse. The protagonist, probably the only surviving law enforcement officer endowed with official powers, assumes authority to control the observance of the basic rights of mankind, tries to somehow maintain order in a group that wanders in search of people and a safe place to live. But out of fear there are constant conflicts, team members die almost every day. And then the loving father, husband and man of the law decides to leave this team and find his place in the new world of post-apocalypse." }, year: 2010, director: "Френк Дарабонт", duration: "45 хв/серія" },
            { title: { uk: "Фарго", en: "Fargo" }, genres: ["Кримінал", "Драма", "Трилер"], rating: 4, poster: "https://uakino.me/uploads/posts/2018-03/1520083397_1.jpg", description: { uk: "Серіал «Фарго» - це адаптація фільму дев'яностих років знятого братами Коенами. Бродяга по імені Лорн приїжджає в місто Фарго. У містечку починають відбуватися неприємні для населення події. Лорн зла людина, яка обожнює насильство, його присутність назавжди змінить це місто. Все зміниться, коли Лорн знаходить спільну мову з страховим агентом, який ледь животіє і найбільше хоче якось змінити своє сумне життя. Події цікаві та насичені. ", en: "The series Fargo is an adaptation of the film of the nineties shot by the Coen brothers. A tramp named Lorne arrives in the city of Fargo. In the town, unpleasant events begin to occur for the population. Lorne is an evil man who loves violence, his presence will forever change this city. Everything will change when Lorne finds a common language with an insurance agent who is barely tummy and most of all wants to somehow change his sad life. Events are interesting and intense." }, year: 2014, director: "Ноа Гоулі", duration: "53 хв/серія" },
            { title: { uk: "Нарко", en: "Narcos" }, genres: ["Кримінал", "Драма"], rating: 4, poster: "https://uakino.me/uploads/posts/2018-10/1538494023-1.jpg", description: { uk: "Головний герой серіалу Пабло почав свою злочинну діяльність ще зі шкільних років, тоді він був дрібним шахраєм і злодієм. З кожним роком він дорослішав і його злочинна діяльність росла разом з ним, він почав займатися викраденнями людей і збройними нальотами. Після того, як у нього з'явилося більше надійних людей Пабло почав займатися поставками колумбійського кокаїну в Сполучені тати Америки. Саме завдяки цьому бізнесу став найбагатшим у своїй країні. Хитрий чоловік вклав велику частину грошей в економіку рідної країни за це його почали вважати героєм. Ескобар стає не тільки найбільшим постачальником наркотиків, але їх виробником. Відкриті на півночі лабораторії почали випускати товару на мільярди доларів і всім цим володів Пабло. Чим закінчилася ця історія дивіться в даному серіалі.", en: "The protagonist of the series Pablo began his criminal activity from his school years, then he was a petty fraudster and thief. Every year he grew up and his criminal activity grew with him, he began to engage in kidnapping and armed raids. After he had more reliable people, Pablo began to supply Colombian cocaine to the United Fathers of America. It was thanks to this business that he became the richest in his country. The cunning man invested most of the money in the economy of his native country for this he began to be considered a hero. Escobar becomes not only the largest supplier of drugs, but their producer. Laboratories opened in the north began to produce goods worth billions of dollars and Pablo owned all this. How did this story end, see this series." }, year: 2015, director: "Кріс Бранкато", duration: "49 хв/серія" },
            { title: { uk: "Справжній детектив", en: "True Detective" }, genres: ["Детектив", "Драма", "Кримінал"], rating: 5, poster: "https://uakino.me/uploads/post/TrueDetective/i0r6WpuM8kbUGBcgqtezX82XUCX.jpg", description: { uk: "Справжній детектив - це кримінальний серіал телеканалу HBO про двох поліцейських, Мартінес Харт і Раст Колі, які познайомилися ще в середині дев'яностих років, коли разом вели справу про серійного маніяка вчинили кілька жорстоких вбивств. 2012 рік, випадково спливають нові докази, які можуть пролити світло на справу сімнадцятирічної давності. Відкриття можуть привести до шокуючих і трагічних наслідків, адже і самі поліцейські мають темне минуле і їм самим є що приховувати. Дії телесеріалу розгортатимуться як у наш час, так і будуть переносити глядача в далекі дев'яності роки.", en: "True Detective  is a crime series by HBO about two policemen, Martinez Hart and Rust Coley, who met in the mid-nineties, when together they conducted a case of a serial maniac committed several brutal murders. 2012, new evidence accidentally pops up that could shed light on a seventeen-year-old case. Discoveries can lead to shocking and tragic consequences, because the police themselves have a dark past and they themselves have something to hide. The actions of the television series will unfold both in our time and will carry the viewer into the distant nineties." }, year: 2014, director: "Нік Піццолатто", duration: "55 хв/серія" },
            { title: { uk: "Друзі", en: "Friends" }, genres: ["Комедія", "Романтика"], rating: 5, poster: "https://uakino.me/uploads/posts/2024-12/8qaqw4uufoz9t38rob48r8lcq30.jpg", description: { uk: "Серіал «Друзі» - один із найпопулярніших ситкомів за всю історію телебачення. Ні творці картини, ні актори, не могли навіть уявити собі, що вже з перших серій (що вийшли ще в 1994 році) він завоює величезну популярність у глядачів і телекритиків. Жарти, вимовлені акторами будуть розібрані на цитати, а молодь стане одягатися і носити зачіски улюблених героїв.Сюжет телесеріалу будується навколо головних героїв: Рейчел, Фібі, Моніки, Росса, Джо і Чендлера - трьох молодих дівчат і хлопців, що знімають квартиру в одному з кращих районів Нью-Йорка - Вест Вілідж. Протягом усіх серій ця компанія потрапляє в різні комічні і не дуже ситуації - вони заводять романи і закохуються, сваряться і миряться між собою, одружуються і виходять заміж. У них постійно не вистачає грошей і вони знаходяться в пошуках гарної роботи і особистих відносин. Загалом, все те, що відбувається з кожним з нас в житті. Кожен з героїв має свій неповторний характер, а всі разом вони утворюють ідеальну компанію. Моніка - красуня, яка ніяк не може знайти свою ідеальну половинку. Рейчел - непостійна у всіх відносинах. Джо - хлопець мріє стати відомим актором, але вимушеним в очікуванні великої ролі зніматися в дрібних картинах. Розумний і інтелігентний Росс і найвеселіший з усієї компанії - Чендлер, постійно потрапляє в різні безглузді ситуації.", en: "The series Friends is one of the most popular sitcoms in the history of television. Neither the creators of the picture, nor the actors, could even imagine that from the first series (released back in 1994) he would gain immense popularity among the audience and television critics. Jokes uttered by the actors will be disassembled into quotes, and young people will dress and wear the hairstyles of their favorite characters. The plot of the television series is built around the main characters: Rachel, Phoebe, Monica, Ross, Joe and Chandler - three young girls and guys renting an apartment in one of the best areas of New York - West Village. Throughout the series, this company gets into various comic and not very situations - they start novels and fall in love, quarrel and reconcile with each other, get married and get married. They constantly do not have enough money and they are in search of good work and personal relationships. In general, everything that happens to each of us in life. Each of the characters has its own unique character, and together they form the perfect company. Monica is a beauty who can not find her perfect half. Rachel is fickle in every way. Joe - the guy dreams of becoming a famous actor, but forced to act in small pictures in anticipation of a big role. Smart and intelligent Ross and the most fun of the whole company - Chandler, constantly gets into various ridiculous situations." }, year: 1994, director: "Девід Крейн, Марта Кауфман", duration: "22 хв/серія" },
            { title: { uk: "Люцифер", en: "Lucifer" }, genres: ["Фантастика", "Детектив", "Драма"], rating: 4, poster: "https://uakino.me/uploads/posts/2023-11/1700782851_55.jpg", description: { uk: "Перший сезон найпопулярнішого серіалу Люцифер вже перед вами. У центрі уваги історії виявляється розповідь про життя та роботу Люцифера Морнінгстара. Король пекла вже втомився від своєї звичної роботи. Йому набридло сидіти на троні, тому той вирушив у великий круїз на Землю, щоб дізнатися, як саме живуть люди. Люцифер у Лос-Анджелесі заради пустощів відкриває нічний клуб. Здавалося б, життя йде на поправку. Люциферу дуже весело. Допоки на порозі його закладу не знаходять труп. Справою займається юна дівчина-детектив, яка відразу западає в душу королю пекла. Та й до того ж чомусь на неї не працюють чари Люцифера, що змушує головного героя ще краще впізнати дівчину.", en: "The first season of the most popular series Lucifer is already in front of you. The story focuses on the life and work of Lucifer Morningstar. The king of hell is already tired of his usual work. He was tired of sitting on the throne, so he went on a big cruise to Earth to find out exactly how people live. Lucifer in Los Angeles opens a nightclub for pranks. It would seem that life is on the mend. Lucifer is a lot of fun. Until a corpse is found on his doorstep. The case is a young girl detective, who immediately falls into the soul of the king of hell. And besides, for some reason, Lucifer's magic does not work for her, which makes the main character even better recognize the girl." }, year: 2016, director: "Том Капінос", duration: "48 хв/серія" },
            { title: { uk: "Світ Дикого Заходу", en: "Westworld" }, genres: ["Фантастика", "Трилер", "Драма"], rating: 4, poster: "https://uakino.me/uploads/posts/2018-01/1515018508_1.jpg", description: { uk: "У парку розваг недалекого майбутнього в серіалі «Світ Дикого Заходу» співіснують люди і роботи, але останні знаходяться в положенні підлеглих. На тлі історичних декорацій андроїди виконують всі вимоги і завдання людей, перетворившись в їх беззаперечних рабів. Відвідувачі парку можуть реалізувати тут свої мрії про геройське життя і подвиги: в дусі кращих вестернів вони перевтілюються в рятівників або злочинців, але в цій грі роботи не здатні принести їм будь-якої шкоди.Але фатальна помилка в програмному забезпеченні привела до справжньої трагедії: з слухняних виконавців роботи перетворилися на жорстоких вбивць, і війна між цивілізаціями стає неминучою. Штучний інтелект повстав проти своїх творців, і кращі інженери закладу не можуть усунути цю поломку. Поки співробітники працюють над програмою, постійний клієнт парку відправляється на пошуки пригод і нових небезпек. Чоловік сповнений надій розгадати секрети дивного парку, і готовий випробувати всі пропоновані тут можливості, незважаючи на їх очевидну небезпеку.", en: "In the amusement park of the near future in the series World of the Wild West coexist people and robots, but the latter are in the position of subordinates. Against the background of historical scenery, androids fulfill all the requirements and tasks of people, turning into their undisputed slaves. Visitors to the park can realize their dreams of a heroic life and exploits: in the spirit of the best westerns, they are reincarnated as saviors or criminals, but in this game robots are not able to bring them any harm. But a fatal software error led to a real tragedy: from obedient performers, work turned into brutal killers, and war between civilizations becomes inevitable. Artificial intelligence rebelled against its creators, and the best engineers of the institution cannot eliminate this breakdown. While employees are working on the program, a regular customer of the park goes in search of adventure and new dangers. The man is full of hopes to unravel the secrets of the amazing park, and is ready to try all the opportunities offered here, despite their obvious danger." }, year: 2016, director: "Джонатан Нолан", duration: "62 хв/серія" },
            { title: { uk: "Ейфорія", en: "Euphoria" }, genres: ["Драма"], rating: 4, poster: "https://uakino.me/uploads/posts/2019-07/1562182900-1.jpg", description: { uk: "Цікава і якісна багатосерійна драма, яка є прямою адаптацією однойменного ізраїльського серіалу, і розповідає про життя симпатичної молодої дівчини, що потрапила в дуже погану компанію.Сімнадцятирічна красуня Ру вчиться в старшій школі. Як і більшість своїх однолітків, вона стикається з типовими проблемами підлітків. Близькі люди її не розуміють, а мрії про справжнє і чисте кохання руйнуються під натиском суворої реальності - хлопці не відносяться до Ру серйозно, знаходячи в ній, перш за все, об'єкт сексуального потягу. Розчарована у житті, Ру потрапляє в погану компанію, яка веде вкрай сумнівний спосіб життя. Незабаром безладний секс, алкоголь, наркотики і розваги з кримінальним ухилом стають для Ру нормою. Через деякий час дівчина починає усвідомлювати, що така поведінка може призвести до катастрофічних наслідків, проте самостійно зупинитися вона більше не в силах. Занадто багато важких драматичних подій їй довелося пережити в минулому. На старі проблеми нашаровуються нові, і Ру здається, що її життя незабаром закінчиться ...", en: "An interesting and high-quality multi-part drama, which is a direct adaptation of the Israeli series of the same name, and tells about the life of a pretty young girl who fell into very bad company. Seventeen-year-old beauty Ru is in high school. Like most of her peers, she faces the typical problems of teenagers. Close people do not understand her, and dreams of true and pure love are destroyed under the onslaught of harsh reality - the guys do not take Ru seriously, finding in her, first of all, the object of sexual attraction. Disappointed in life, Ru falls into a bad company that leads an extremely dubious lifestyle. Soon promiscuous sex, alcohol, drugs and entertainment with a criminal bias become the norm for Ru. After some time, the girl begins to realize that such behavior can lead to catastrophic consequences, but she can no longer stop on her own. Too many difficult dramatic events she had to endure in the past. New problems are layered on old problems, and Ru seems that her life will soon end..." }, year: 2019, director: "Сем Левінсон", duration: "55 хв/серія" },
            { title: { uk: "Ти", en: "You" }, genres: ["Трилер", "Драма", "Кримінал"], rating: 4, poster: "https://uakino.me/uploads/posts/2023-11/1699010461_4.png", description: { uk: "Деколи любов змушує нас іти на неймовірні жертви. Це усвідомив і головний герой серіалу – успішний менеджер, який зустрів милу юну письменницю. Закохався настільки, що був готовий піти на все заради щастя коханої. Чоловік вирішив діяти хитро: він знайшов у соціальних мережах інформацію про об'єкт обожнювання та вибудував свою тактику боротьби за її серце. Щоправда, невинне почуття закоханості несподівано переростає у небезпечну одержимість. Хлопець несподівано перетворюється на тирана, готового прибирати зі свого шляху будь-які перешкоди на шляху до серця коханої. Деякі його методи виявляються невиправдано жорстокими.", en: "Sometimes love makes us make incredible sacrifices. This was realized by the protagonist of the series - a successful manager who met a sweet young writer. He fell in love so much that he was ready to do anything for the happiness of his beloved. The man decided to act cunningly: he found information on the object of adoration on social networks and built his tactics to fight for her heart. True, an innocent feeling of love suddenly develops into a dangerous obsession. The guy suddenly turns into a tyrant, ready to remove from his path any obstacles on the way to the heart of his beloved. Some of his methods are unjustifiably cruel." }, year: 2011, director: "Сільвер Трі", duration: "50 хв/серія" },
            { title: { uk: "Тед Лассо", en: "Ted Lasso" }, genres: ["Комедія", "Драма"], rating: 5, poster: "https://uakino.me/uploads/posts/2021-06/1622667208_1622666944_mucoojaide6yr9xcy7h8nvc8osj.jpg", description: { uk: "Жадібна і самовпевнена Ребекка Велтон зробила все можливе, щоб при розлученні відібрати у благовірного чоловіка його улюблену футбольну команду. Єдине, чим дорожив колишній чоловік, має бути знищено, але жінка хотіла виконати свій підступний план красиво і непомітно. Спочатку необхідно було змінити головного тренера, але де знайти тюхтія, який замість перемоги приведе спортсменів до поразки? Шанувальники американського футболу були добре знайомі з особистістю Теда Лассо, а його незабутні ролики набирали безліч переглядів в соціальних мережах. Заповзятлива пані найняла тренера, щоб з його допомогою розвалити команду. Для нього європейський футбол - незвіданий океан, але перед оптимістом не існує непереборних бар'єрів і, можливо, йому вдасться зруйнувати ідею Ребекки і стати відмінним наставником для майбутніх чемпіонів.", en: "Greedy and self-confident Rebecca Welton did everything possible to take away his favorite football team from her faithful husband during a divorce. The only thing that the former husband cherished should be destroyed, but the woman wanted to fulfill her insidious plan beautifully and imperceptibly. Initially, it was necessary to change the head coach, but where to find a thyme, which instead of victory will lead athletes to defeat? Fans of American football were well acquainted with the personality of Ted Lasso, and his unforgettable videos gained many views on social networks. An enterprising lady hired a coach to help her break up the team. For him, European football is an unknown ocean, but there are no insurmountable barriers before the optimist and, perhaps, he will be able to destroy the idea of   Rebecca and become an excellent mentor for future champions." }, year: 2020, director: "Джейсон Судейкіс", duration: "30 хв/серія" }
        ];

        let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        let currentMoviePage = 1;
        let currentSeriesPage = 1;
        const itemsPerPage = 10;
        let currentLang = 'uk';
        let currentPageType = 'movies';

        function getMoviesPage() {
            currentPageType = 'movies';
            const genres = ["Комедія", "Драма", "Екшн", "Фантастика", "Трилер", "Романтика", "Пригоди", "Фентезі"];
            return `
                <div class="controls">
                    <input type="text" id="search" placeholder="${translations[currentLang].search_placeholder}">
                    <select id="genre-filter">
                        <option value="">${translations[currentLang].genre_filter_all}</option>
                        ${genres.map(genre => `<option value="${genre}">${translations[currentLang].genres[genre]}</option>`).join('')}
                    </select>
                    <select id="sort-filter">
                        <option value="">${translations[currentLang].sort_filter}</option>
                        <option value="rating">${translations[currentLang].sort_rating}</option>
                        <option value="year">${translations[currentLang].sort_year}</option>
                    </select>
                </div>
                <h1>${translations[currentLang].movies_title}</h1>
                <div class="movie-list" id="movie-list"></div>
                <div class="pagination" id="movie-pagination"></div>
            `;
        }

        function getSeriesPage() {
            currentPageType = 'series';
            const genres = ["Комедія", "Драма", "Фентезі", "Фантастика", "Трилер", "Романтика", "Детектив", "Жахи", "Кримінал", "Історичний"];
            return `
                <div class="controls">
                    <input type="text" id="series-search" placeholder="${translations[currentLang].search_placeholder}">
                    <select id="series-genre-filter">
                        <option value="">${translations[currentLang].genre_filter_all}</option>
                        ${genres.map(genre => `<option value="${genre}">${translations[currentLang].genres[genre]}</option>`).join('')}
                    </select>
                    <select id="series-sort-filter">
                        <option value="">${translations[currentLang].sort_filter}</option>
                        <option value="rating">${translations[currentLang].sort_rating}</option>
                        <option value="year">${translations[currentLang].sort_year}</option>
                    </select>
                </div>
                <h1>${translations[currentLang].series_title}</h1>
                <div class="series-list" id="series-list"></div>
                <div class="pagination" id="series-pagination"></div>
            `;
        }

        function getLoginPage() {
            currentPageType = 'login';
            return `
                <div class="login-page">
                    <h1>${translations[currentLang].login_title}</h1>
                    <input type="text" id="username" placeholder="${translations[currentLang].username_placeholder}">
                    <input type="password" id="password" placeholder="${translations[currentLang].password_placeholder}">
                    <button id="submit-login">${translations[currentLang].login_button}</button>
                    <a href="#" id="register-link">${translations[currentLang].register_link}</a>
                </div>
            `;
        }

        function getRegisterPage() {
            currentPageType = 'register';
            return `
                <div class="register-page">
                    <h1>${translations[currentLang].register_title}</h1>
                    <input type="text" id="register-username" placeholder="${translations[currentLang].username_placeholder}">
                    <input type="password" id="register-password" placeholder="${translations[currentLang].password_placeholder}">
                    <input type="password" id="confirm-password" placeholder="${translations[currentLang].confirm_password_placeholder}">
                    <button id="submit-register">${translations[currentLang].register_button}</button>
                    <a href="#" id="login-link-from-register">${translations[currentLang].login_link}</a>
                </div>
            `;
        }

        function getAccountPage() {
            currentPageType = 'account';
            const user = JSON.parse(localStorage.getItem('user'));
            return `
                <div class="account-page">
                    <h1>${translations[currentLang].account_title}</h1>
                    ${user ? `
                        <p>${translations[currentLang].welcome.replace('{username}', user.username)}</p>
                        <h2>${translations[currentLang].profile_title}</h2>
                        <input type="text" id="first-name" placeholder="${translations[currentLang].first_name_placeholder}" value="${user.firstName || ''}">
                        <input type="text" id="last-name" placeholder="${translations[currentLang].last_name_placeholder}" value="${user.lastName || ''}">
                        <input type="email" id="email" placeholder="${translations[currentLang].email_placeholder}" value="${user.email || ''}">
                        <select id="favorite-genre">
                            <option value="">${translations[currentLang].favorite_genre_placeholder}</option>
                            <option value="Комедія" ${user.favoriteGenre === 'Комедія' ? 'selected' : ''}>${translations[currentLang].genres['Комедія']}</option>
                            <option value="Драма" ${user.favoriteGenre === 'Драма' ? 'selected' : ''}>${translations[currentLang].genres['Драма']}</option>
                            <option value="Екшн" ${user.favoriteGenre === 'Екшн' ? 'selected' : ''}>${translations[currentLang].genres['Екшн']}</option>
                            <option value="Фантастика" ${user.favoriteGenre === 'Фантастика' ? 'selected' : ''}>${translations[currentLang].genres['Фантастика']}</option>
                            <option value="Трилер" ${user.favoriteGenre === 'Трилер' ? 'selected' : ''}>${translations[currentLang].genres['Трилер']}</option>
                            <option value="Романтика" ${user.favoriteGenre === 'Романтика' ? 'selected' : ''}>${translations[currentLang].genres['Романтика']}</option>
                            <option value="Пригоди" ${user.favoriteGenre === 'Пригоди' ? 'selected' : ''}>${translations[currentLang].genres['Пригоди']}</option>
                            <option value="Фентезі" ${user.favoriteGenre === 'Фентезі' ? 'selected' : ''}>${translations[currentLang].genres['Фентезі']}</option>
                            <option value="Детектив" ${user.favoriteGenre === 'Детектив' ? 'selected' : ''}>${translations[currentLang].genres['Детектив']}</option>
                            <option value="Жахи" ${user.favoriteGenre === 'Жахи' ? 'selected' : ''}>${translations[currentLang].genres['Жахи']}</option>
                            <option value="Кримінал" ${user.favoriteGenre === 'Кримінал' ? 'selected' : ''}>${translations[currentLang].genres['Кримінал']}</option>
                            <option value="Історичний" ${user.favoriteGenre === 'Історичний' ? 'selected' : ''}>${translations[currentLang].genres['Історичний']}</option>
                        </select>
                        <button id="save-profile">${translations[currentLang].save_profile}</button>
                        <button id="logout">${translations[currentLang].logout}</button>
                    ` : `<p>${translations[currentLang].no_account}</p>`}
                </div>
            `;
        }

        function getBookmarksPage() {
            currentPageType = 'bookmarks';
            const user = JSON.parse(localStorage.getItem('user'));
            const bookmarkedMovies = movies.filter(movie => bookmarks.includes(movie.title.uk));
            const bookmarkedSeries = series.filter(s => bookmarks.includes(s.title.uk));
            return `
                <div class="bookmarks-page">
                    <h1>${translations[currentLang].bookmarks_title}</h1>
                    ${user ? `
                        <h2>${translations[currentLang].bookmarks_movies}</h2>
                        <div class="movie-list" id="bookmarks-movie-list">
                            ${bookmarkedMovies.length ? bookmarkedMovies.map((movie) => {
                const originalIndex = movies.findIndex(m => m.title.uk === movie.title.uk);
                return `
                                    <div class="movie" data-index="${originalIndex}" data-type="movie">
                                        <img src="${movie.poster}" alt="${movie.title[currentLang]}" class="poster-img">
                                        <h2>${movie.title[currentLang]}</h2>
                                        <p>${translations[currentLang].genre_label}: ${movie.genres.map(g => translations[currentLang].genres[g] || g).join(', ')}</p>
                                        <p>${translations[currentLang].rating_label}: ${renderStars(movie.rating)}</p>
                                        <button class="remove-bookmark" data-title="${movie.title.uk}">${translations[currentLang].remove_bookmark}</button>
                                    </div>
                                `;
            }).join('') : `<p>${translations[currentLang].no_bookmarks_movies}</p>`}
                        </div>
                        <h2>${translations[currentLang].bookmarks_series}</h2>
                        <div class="series-list" id="bookmarks-series-list">
                            ${bookmarkedSeries.length ? bookmarkedSeries.map((s) => {
                const originalIndex = series.findIndex(ser => ser.title.uk === s.title.uk);
                return `
                                    <div class="series" data-index="${originalIndex}" data-type="series">
                                        <img src="${s.poster}" alt="${s.title[currentLang]}" class="poster-img">
                                        <h2>${s.title[currentLang]}</h2>
                                        <p>${translations[currentLang].genre_label}: ${s.genres.map(g => translations[currentLang].genres[g] || g).join(', ')}</p>
                                        <p>${translations[currentLang].rating_label}: ${renderStars(s.rating)}</p>
                                        <button class="remove-bookmark" data-title="${s.title.uk}">${translations[currentLang].remove_bookmark}</button>
                                    </div>
                                `;
            }).join('') : `<p>${translations[currentLang].no_bookmarks_series}</p>`}
                        </div>
                    ` : `<p>${translations[currentLang].no_bookmarks}</p>`}
                </div>
            `;
        }

        function getMoviePage(index) {
            currentPageType = 'movie-details';
            if (!movies[index]) return `<p>${translations[currentLang].no_account}</p>`;
            const movie = movies[index];
            const isBookmarked = bookmarks.includes(movie.title.uk);
            return `
                <div class="movie-details">
                    <h1>${movie.title[currentLang]}</h1>
                    <img src="${movie.poster}" alt="${movie.title[currentLang]}">
                    <p><strong>${translations[currentLang].genre_label}:</strong> ${movie.genres.map(g => translations[currentLang].genres[g] || g).join(', ')}</p>
                    <p><strong>${translations[currentLang].rating_label}:</strong> <span class="rating" data-index="${index}" data-type="movie">${renderStars(movie.rating)}</span></p>
                    <p><strong>${translations[currentLang].year_label}:</strong> ${movie.year}</p>
                    <p><strong>${translations[currentLang].director_label}:</strong> ${movie.director}</p>
                    <p><strong>${translations[currentLang].duration_label}:</strong> ${movie.duration}</p>
                    <p><strong>${translations[currentLang].description_label}:</strong> ${movie.description[currentLang]}</p>
                    <button class="${isBookmarked ? 'remove-bookmark' : 'add-bookmark'}" data-title="${movie.title.uk}">
                        ${isBookmarked ? translations[currentLang].remove_bookmark : translations[currentLang].add_bookmark}
                    </button>
                    <button id="back-to-movies">${translations[currentLang].back_to_movies}</button>
                </div>
            `;
        }

        function getSeriesPageDetails(index) {
            currentPageType = 'series-details';
            if (!series[index]) return `<p>${translations[currentLang].no_bookmarks}</p>`;
            const s = series[index];
            const isBookmarked = bookmarks.includes(s.title.uk);
            return `
                <div class="series-details">
                    <h1>${s.title[currentLang]}</h1>
                    <img src="${s.poster}" alt="${s.title[currentLang]}">
                    <p><strong>${translations[currentLang].genre_label}:</strong> ${s.genres.map(g => translations[currentLang].genres[g] || g).join(', ')}</p>
                    <p><strong>${translations[currentLang].rating_label}:</strong> <span class="rating" data-index="${index}" data-type="series">${renderStars(s.rating)}</span></p>
                    <p><strong>${translations[currentLang].year_label}:</strong> ${s.year}</p>
                    <p><strong>${translations[currentLang].director_label}:</strong> ${s.director}</p>
                    <p><strong>${translations[currentLang].duration_label}:</strong> ${s.duration}</p>
                    <p><strong>${translations[currentLang].description_label}:</strong> ${s.description[currentLang]}</p>
                    <button class="${isBookmarked ? 'remove-bookmark' : 'add-bookmark'}" data-title="${s.title.uk}">
                        ${isBookmarked ? translations[currentLang].remove_bookmark : translations[currentLang].add_bookmark}
                    </button>
                    <button id="back-to-series">${translations[currentLang].back_to_series}</button>
                </div>
            `;
        }

        function updateGenreFilters() {
            const movieGenreFilter = document.getElementById('genre-filter');
            const seriesGenreFilter = document.getElementById('series-genre-filter');
            if (movieGenreFilter) {
                const selectedValue = movieGenreFilter.value;
                const genres = ["Комедія", "Драма", "Екшн", "Фантастика", "Трилер", "Романтика", "Пригоди", "Фентезі"];
                movieGenreFilter.innerHTML = `
                    <option value="">${translations[currentLang].genre_filter_all}</option>
                    ${genres.map(genre => `<option value="${genre}" ${selectedValue === genre ? 'selected' : ''}>${translations[currentLang].genres[genre] || genre}</option>`).join('')}
                `;
            }
            if (seriesGenreFilter) {
                const selectedValue = seriesGenreFilter.value;
                const genres = ["Комедія", "Драма", "Фентезі", "Фантастика", "Трилер", "Романтика", "Детектив", "Жахи", "Кримінал", "Історичний"];
                seriesGenreFilter.innerHTML = `
                    <option value="">${translations[currentLang].genre_filter_all}</option>
                    ${genres.map(genre => `<option value="${genre}" ${selectedValue === genre ? 'selected' : ''}>${translations[currentLang].genres[genre] || genre}</option>`).join('')}
                `;
            }
        }

        function displayItems(itemArray, containerId, type, currentPage) {
            const list = document.getElementById(containerId);
            if (!list) {
                console.warn(`Container ${containerId} not found`);
                return;
            }
            list.innerHTML = '';
            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const paginatedItems = itemArray.slice(start, end);
            const originalArray = type === 'movie' ? movies : series;

            paginatedItems.forEach((item, index) => {
                if (!item || !item.title) {
                    console.warn(`Invalid item at index ${index}`);
                    return;
                }
                const originalIndex = originalArray.findIndex(originalItem => originalItem.title.uk === item.title.uk);
                if (originalIndex === -1) {
                    console.warn(`Item ${item.title.uk} not found in original array`);
                    return;
                }
                const isBookmarked = bookmarks.includes(item.title.uk);
                const itemDiv = document.createElement('div');
                itemDiv.classList.add(type);
                itemDiv.dataset.index = originalIndex;
                itemDiv.dataset.type = type;
                itemDiv.innerHTML = `
                    <img src="${item.poster}" alt="${item.title[currentLang]}" class="poster-img">
                    <h2>${item.title[currentLang]}</h2>
                    <p>${translations[currentLang].genre_label}: ${item.genres.map(g => translations[currentLang].genres[g] || g).join(', ')}</p>
                    <p>${translations[currentLang].rating_label}: <span class="rating" data-index="${originalIndex}" data-type="${type}">${renderStars(item.rating)}</span></p>
                    <button class="${isBookmarked ? 'remove-bookmark' : 'add-bookmark'}" data-title="${item.title.uk}">
                        ${isBookmarked ? translations[currentLang].remove_bookmark : translations[currentLang].add_bookmark}
                    </button>
                `;
                list.appendChild(itemDiv);
                itemDiv.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('add-bookmark') && !e.target.classList.contains('remove-bookmark')) {
                        showPage(type === 'movie' ? getMoviePage(originalIndex) : getSeriesPageDetails(originalIndex));
                    }
                });
                itemDiv.querySelector('.add-bookmark')?.addEventListener('click', () => {
                    if (!JSON.parse(localStorage.getItem('user'))) {
                        alert(translations[currentLang].login_required);
                        return;
                    }
                    bookmarks.push(item.title.uk);
                    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                    updateItemList(type);
                });
                itemDiv.querySelector('.remove-bookmark')?.addEventListener('click', () => {
                    bookmarks = bookmarks.filter(title => title !== item.title.uk);
                    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                    updateItemList(type);
                });
            });

            document.querySelectorAll(`#${containerId} .rating`).forEach(rating => {
                rating.querySelectorAll('span').forEach(star => {
                    star.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const index = parseInt(e.target.parentElement.dataset.index);
                        const itemType = e.target.parentElement.dataset.type;
                        const ratingValue = parseInt(e.target.dataset.value);
                        if (itemType === 'movie' && movies[index]) {
                            movies[index].rating = ratingValue;
                            localStorage.setItem('movies', JSON.stringify(movies));
                        } else if (itemType === 'series' && series[index]) {
                            series[index].rating = ratingValue;
                            localStorage.setItem('series', JSON.stringify(series));
                        }
                        updateItemList(itemType);
                    });
                });
            });

            const totalPages = Math.ceil(itemArray.length / itemsPerPage);
            const pagination = document.getElementById(`${type}-pagination`);
            if (pagination) {
                pagination.innerHTML = `
                    <button id="${type}-prev-page" ${currentPage === 1 ? 'disabled' : ''}>${translations[currentLang].prev_page}</button>
                    <span>${translations[currentLang].page} ${currentPage} ${translations[currentLang].of} ${totalPages}</span>
                    <button id="${type}-next-page" ${currentPage === totalPages ? 'disabled' : ''}>${translations[currentLang].next_page}</button>
                `;
                document.getElementById(`${type}-prev-page`)?.addEventListener('click', () => {
                    if (currentPage > 1) {
                        if (type === 'movie') currentMoviePage--;
                        else currentSeriesPage--;
                        updateItemList(type);
                    }
                });
                document.getElementById(`${type}-next-page`)?.addEventListener('click', () => {
                    if (currentPage < totalPages) {
                        if (type === 'movie') currentMoviePage++;
                        else currentSeriesPage++;
                        updateItemList(type);
                    }
                });
            }
        }

        function getFilteredItems(items, searchId, genreId, sortId) {
            let filteredItems = [...items];
            const search = document.getElementById(searchId)?.value.toLowerCase() || '';
            const genre = document.getElementById(genreId)?.value || '';
            const sort = document.getElementById(sortId)?.value || '';
            if (search) filteredItems = filteredItems.filter(item => item.title[currentLang].toLowerCase().includes(search));
            if (genre) filteredItems = filteredItems.filter(item => item.genres.includes(genre));
            if (sort === 'rating') filteredItems.sort((a, b) => b.rating - a.rating);
            else if (sort === 'year') filteredItems.sort((a, b) => b.year - a.year);
            return filteredItems;
        }

        function updateItemList(type) {
            if (type === 'movie') {
                const filteredMovies = getFilteredItems(movies, 'search', 'genre-filter', 'sort-filter');
                displayItems(filteredMovies, 'movie-list', 'movie', currentMoviePage);
            } else if (type === 'series') {
                const filteredSeries = getFilteredItems(series, 'series-search', 'series-genre-filter', 'series-sort-filter');
                displayItems(filteredSeries, 'series-list', 'series', currentSeriesPage);
            }
        }

        function renderStars(rating) {
            let stars = '';
            for (let i = 1; i <= 5; i++) {
                stars += `<span data-value="${i}" style="color: ${i <= rating ? '#FFD700' : '#ccc'};">★</span>`;
            }
            return stars;
        }

        function showPage(html) {
            const main = document.getElementById('main-content');
            if (!main) {
                console.error('Main content element not found');
                return;
            }
            main.classList.add('fade-out');
            setTimeout(() => {
                main.innerHTML = '';
                main.innerHTML = html;
                main.classList.remove('fade-out');
                main.classList.add('fade-in');
                attachEventListeners();
                updateGenreFilters();
                if (currentPageType === 'movies') updateItemList('movie');
                else if (currentPageType === 'series') updateItemList('series');
            }, 300);
        }

        function attachEventListeners() {
            const langToggle = document.getElementById('lang-toggle');
            if (langToggle) {
                const newButton = langToggle.cloneNode(true);
                langToggle.parentNode.replaceChild(newButton, langToggle);
                newButton.addEventListener('click', () => {
                    currentLang = currentLang === 'uk' ? 'en' : 'uk';
                    newButton.textContent = currentLang === 'uk' ? 'Eng' : 'Укр';
                    updateNavigation();
                    updateGenreFilters();
                    showPage(getCurrentPage());
                });
            }

            document.getElementById('movies-link')?.addEventListener('click', (e) => {
                e.preventDefault();
                currentMoviePage = 1;
                showPage(getMoviesPage());
            });
            document.getElementById('series-link')?.addEventListener('click', (e) => {
                e.preventDefault();
                currentSeriesPage = 1;
                showPage(getSeriesPage());
            });
            document.getElementById('login-link')?.addEventListener('click', (e) => {
                e.preventDefault();
                showPage(getLoginPage());
            });
            document.getElementById('account-link')?.addEventListener('click', (e) => {
                e.preventDefault();
                showPage(getAccountPage());
            });
            document.getElementById('bookmarks-link')?.addEventListener('click', (e) => {
                e.preventDefault();
                showPage(getBookmarksPage());
            });

            document.getElementById('search')?.addEventListener('input', () => updateItemList('movie'));
            document.getElementById('genre-filter')?.addEventListener('change', () => {
                currentMoviePage = 1;
                updateItemList('movie');
            });
            document.getElementById('sort-filter')?.addEventListener('change', () => updateItemList('movie'));

            document.getElementById('series-search')?.addEventListener('input', () => updateItemList('series'));
            document.getElementById('series-genre-filter')?.addEventListener('change', () => {
                currentSeriesPage = 1;
                updateItemList('series');
            });
            document.getElementById('series-sort-filter')?.addEventListener('change', () => updateItemList('series'));

            document.getElementById('submit-login')?.addEventListener('click', () => {
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                const users = JSON.parse(localStorage.getItem('users')) || [];
                if (!username || !password) {
                    alert(translations[currentLang].login_error);
                    return;
                }
                const user = users.find(u => u.username === username && u.password === password);
                if (user) {
                    localStorage.setItem('user', JSON.stringify(user));
                    alert(translations[currentLang].login_success);
                    updateNavigation();
                    showPage(getMoviesPage());
                } else {
                    alert(translations[currentLang].login_invalid);
                }
            });

            document.getElementById('register-link')?.addEventListener('click', (e) => {
                e.preventDefault();
                showPage(getRegisterPage());
            });

            document.getElementById('submit-register')?.addEventListener('click', () => {
                const username = document.getElementById('register-username').value;
                const password = document.getElementById('register-password').value;
                const confirmPassword = document.getElementById('confirm-password').value;
                let users = JSON.parse(localStorage.getItem('users')) || [];
                if (!username || !password || !confirmPassword || password !== confirmPassword) {
                    alert(translations[currentLang].register_error);
                    return;
                }
                if (users.find(u => u.username === username)) {
                    alert(translations[currentLang].register_username_exists);
                    return;
                }
                const newUser = { username, password };
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('user', JSON.stringify(newUser));
                alert(translations[currentLang].register_success);
                updateNavigation();
                showPage(getMoviesPage());
            });

            document.getElementById('login-link-from-register')?.addEventListener('click', (e) => {
                e.preventDefault();
                showPage(getLoginPage());
            });

            document.getElementById('save-profile')?.addEventListener('click', () => {
                const user = JSON.parse(localStorage.getItem('user'));
                if (user) {
                    user.firstName = document.getElementById('first-name').value;
                    user.lastName = document.getElementById('last-name').value;
                    user.email = document.getElementById('email').value;
                    user.favoriteGenre = document.getElementById('favorite-genre').value;
                    localStorage.setItem('user', JSON.stringify(user));
                    let users = JSON.parse(localStorage.getItem('users')) || [];
                    const userIndex = users.findIndex(u => u.username === user.username);
                    if (userIndex !== -1) {
                        users[userIndex] = user;
                        localStorage.setItem('users', JSON.stringify(users));
                    }
                    alert(translations[currentLang].profile_saved);
                    showPage(getAccountPage());
                }
            });

            document.getElementById('logout')?.addEventListener('click', () => {
                localStorage.removeItem('user');
                alert(translations[currentLang].logout_success);
                updateNavigation();
                showPage(getMoviesPage());
            });

            document.getElementById('back-to-movies')?.addEventListener('click', (e) => {
                e.preventDefault();
                showPage(getMoviesPage());
            });

            document.getElementById('back-to-series')?.addEventListener('click', (e) => {
                e.preventDefault();
                showPage(getSeriesPage());
            });

            document.querySelectorAll('.add-bookmark').forEach(button => {
                button.addEventListener('click', () => {
                    if (!JSON.parse(localStorage.getItem('user'))) {
                        alert(translations[currentLang].login_required);
                        return;
                    }
                    const title = button.dataset.title;
                    if (!bookmarks.includes(title)) {
                        bookmarks.push(title);
                        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                        showPage(getCurrentPage());
                    }
                });
            });

            document.querySelectorAll('.remove-bookmark').forEach(button => {
                button.addEventListener('click', () => {
                    const title = button.dataset.title;
                    bookmarks = bookmarks.filter(t => t !== title);
                    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                    showPage(getCurrentPage());
                });
            });

            document.querySelectorAll('.rating').forEach(rating => {
                rating.querySelectorAll('span').forEach(star => {
                    star.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const index = parseInt(e.target.parentElement.dataset.index);
                        const itemType = e.target.parentElement.dataset.type;
                        const ratingValue = parseInt(e.target.dataset.value);
                        if (itemType === 'movie' && movies[index]) {
                            movies[index].rating = ratingValue;
                            localStorage.setItem('movies', JSON.stringify(movies));
                        } else if (itemType === 'series' && series[index]) {
                            series[index].rating = ratingValue;
                            localStorage.setItem('series', JSON.stringify(series));
                        }
                        showPage(getCurrentPage());
                    });
                });
            });

            document.querySelectorAll('.movie, .series').forEach(item => {
                item.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('add-bookmark') && !e.target.classList.contains('remove-bookmark') && !e.target.classList.contains('rating') && !e.target.parentElement.classList.contains('rating')) {
                        const index = parseInt(item.dataset.index);
                        const type = item.dataset.type;
                        showPage(type === 'movie' ? getMoviePage(index) : getSeriesPageDetails(index));
                    }
                });
            });
        }

        function updateNavigation() {
            const user = JSON.parse(localStorage.getItem('user'));
            document.getElementById('account-nav-item').style.display = user ? 'block' : 'none';
            document.getElementById('bookmarks-nav-item').style.display = user ? 'block' : 'none';
            document.getElementById('login-nav-item').style.display = user ? 'none' : 'block';
            document.querySelectorAll('#nav-menu a').forEach(link => {
                link.textContent = link.dataset[currentLang];
            });
        }

        function getCurrentPage() {
            switch (currentPageType) {
                case 'movies':
                    return getMoviesPage();
                case 'series':
                    return getSeriesPage();
                case 'login':
                    return getLoginPage();
                case 'register':
                    return getRegisterPage();
                case 'account':
                    return getAccountPage();
                case 'bookmarks':
                    return getBookmarksPage();
                case 'movie-details':
                    const movieIndex = parseInt(document.querySelector('.movie-details .rating')?.dataset.index) || 0;
                    return getMoviePage(movieIndex);
                case 'series-details':
                    const seriesIndex = parseInt(document.querySelector('.series-details .rating')?.dataset.index) || 0;
                    return getSeriesPageDetails(seriesIndex);
                default:
                    return getMoviesPage();
            }
        }

        // Ініціалізація
        document.addEventListener('DOMContentLoaded', () => {
            updateNavigation();
            showPage(getMoviesPage());
        });
