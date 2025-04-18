const authors = [
    { id: 1, name: 'J.K. Rowling', img: 'jkrowling.jpg' },
    { id: 2, name: 'George R.R. Martin', img: 'grrmartin.jpg' },
    { id: 3, name: 'Stephen King', img: 'sking.jpg' },
    { id: 4, name: 'George Orwell', img: 'gorwell.jpg' },
    { id: 5, name: 'Ray Bradbury', img: 'rbradbury.jpg' },
    { id: 15, name: 'Bernard Cornwell', img: 'bcornwell.jpg' },
    { id: 16, name: 'J.R.R. Tolkien', img: 'jrrtolkien.jpg' },
    { id: 17, name: 'Isaac Asimov', img: 'isaacasimov.jpg' },
    { id: 18, name: 'Agatha Christie', img: 'agathachristie.jpg' },
    { id: 19, name: 'Lewis Carroll', img: 'lewiscarroll.jpg' },
    { id: 20, name: 'Frank Herbert', img: 'frankherbert.jpg' }
];

const genres = [
    { id: 1, name: 'Fantasy' },
    { id: 2, name: 'Science Fiction' },
    { id: 3, name: 'Horror' },
    { id: 4, name: 'Mystery' },
    { id: 5, name: 'Adventure' }
];

const books = [
    {
        idBook: 1,
        name: "Harry Potter and the Philosopher's Stone",
        img: "harry-potter-1.jpg",
        authorId: 1,
        genreId: 1,
        describe: "Harry Potter's first year at Hogwarts"
    },
    {
        idBook: 2,
        name: "A Game of Thrones",
        img: "got-1.jpg",
        authorId: 2,
        genreId: 1,
        describe: "First book in the Song of Ice and Fire series"
    },
    {
        idBook: 3,
        name: "The Shining",
        img: "shining.jpg",
        authorId: 3,
        genreId: 3,
        describe: "A family becomes caretakers of an isolated hotel"
    },
    {
        idBook: 4,
        name: "1984",
        img: "1984.jpg",
        authorId: 4,
        genreId: 2,
        describe: "A dystopian social science fiction novel"
    },
    {
        idBook: 5,
        name: "Fahrenheit 451",
        img: "f451.jpg",
        authorId: 5,
        genreId: 2,
        describe: "A dystopian novel about a future society"
    },
    {
        idBook: 6,
        name: "Harry Potter and the Chamber of Secrets",
        img: "https://example.com/images/harry-potter-2.jpg",
        authorId: 1,
        genreId: 1,
        describe: "Harry returns for his second year at Hogwarts School. Dark forces begin to stir within the castle walls."
    },
    {
        idBook: 7,
        name: "Harry Potter and the Prisoner of Azkaban",
        img: "https://example.com/images/harry-potter-3.jpg",
        authorId: 1,
        genreId: 1,
        describe: "Harry learns about Sirius Black, a dangerous prisoner on the loose. Secrets about his past are slowly revealed."
    },
    {
        idBook: 8,
        name: "A Clash of Kings",
        img: "https://example.com/images/got-2.jpg",
        authorId: 2,
        genreId: 1,
        describe: "The Seven Kingdoms are torn apart by civil war. Kings rise and fall as chaos spreads."
    },
    {
        idBook: 9,
        name: "A Storm of Swords",
        img: "https://example.com/images/got-3.jpg",
        authorId: 2,
        genreId: 1,
        describe: "Treachery and betrayal shake Westeros. New alliances form as old ones crumble."
    },
    {
        idBook: 10,
        name: "The Stand",
        img: "https://example.com/images/stand.jpg",
        authorId: 3,
        genreId: 3,
        describe: "A deadly plague wipes out most of humanity. Survivors gather to face the ultimate battle between good and evil."
    },
    {
        idBook: 11,
        name: "It",
        img: "https://example.com/images/it.jpg",
        authorId: 3,
        genreId: 3,
        describe: "An ancient evil resurfaces in the town of Derry. A group of friends must confront their deepest fears."
    },
    {
        idBook: 12,
        name: "Animal Farm",
        img: "https://example.com/images/animal-farm.jpg",
        authorId: 4,
        genreId: 2,
        describe: "Animals overthrow their human farmer to establish an egalitarian society. However, tyranny soon replaces freedom."
    },
    {
        idBook: 13,
        name: "Homage to Catalonia",
        img: "https://example.com/images/homage-catalonia.jpg",
        authorId: 4,
        genreId: 2,
        describe: "George Orwell recounts his experiences in the Spanish Civil War. The brutal reality of political conflict is revealed."
    },
    {
        idBook: 14,
        name: "The Martian Chronicles",
        img: "https://example.com/images/martian-chronicles.jpg",
        authorId: 5,
        genreId: 2,
        describe: "Humans colonize Mars after fleeing a troubled Earth. Stories of hope, loss, and loneliness unfold on the red planet."
    },
    {
        idBook: 15,
        name: "Something Wicked This Way Comes",
        img: "https://example.com/images/something-wicked.jpg",
        authorId: 5,
        genreId: 3,
        describe: "A sinister carnival visits a small town. Two boys must uncover its dark secrets before it is too late."
    },
    {
        idBook: 16,
        name: "Sharpe's Eagle",
        img: "https://example.com/images/sharpes-eagle.jpg",
        authorId: 15,
        genreId: 1,
        describe: "Richard Sharpe battles in the Peninsular War. His bravery is tested during a critical mission in Spain."
    },
    {
        idBook: 17,
        name: "Sharpe's Rifles",
        img: "https://example.com/images/sharpes-rifles.jpg",
        authorId: 15,
        genreId: 1,
        describe: "Sharpe leads a group of riflemen through enemy territory. Courage and strategy are key to survival."
    },
    {
        idBook: 18,
        name: "The Hobbit",
        img: "https://example.com/images/the-hobbit.jpg",
        authorId: 16,
        genreId: 1,
        describe: "Bilbo Baggins embarks on an unexpected adventure. Along the way, he discovers courage he never knew he had."
    },
    {
        idBook: 19,
        name: "The Fellowship of the Ring",
        img: "https://example.com/images/fellowship-ring.jpg",
        authorId: 16,
        genreId: 1,
        describe: "A dark power threatens Middle-earth. A brave fellowship sets out to destroy the One Ring."
    },
    {
        idBook: 20,
        name: "The Two Towers",
        img: "https://example.com/images/two-towers.jpg",
        authorId: 16,
        genreId: 1,
        describe: "The fellowship is broken, and war looms over Middle-earth. Courage and sacrifice drive the story forward."
    },
    {
        idBook: 21,
        name: "The Return of the King",
        img: "https://example.com/images/return-king.jpg",
        authorId: 16,
        genreId: 1,
        describe: "The final battle for Middle-earth begins. Hope and despair clash in a desperate struggle for survival."
    },
    {
        idBook: 22,
        name: "Foundation",
        img: "https://example.com/images/foundation.jpg",
        authorId: 17,
        genreId: 2,
        describe: "The fall of a galactic empire is inevitable. A group of scientists work to shorten the coming dark age."
    },
    {
        idBook: 23,
        name: "Foundation and Empire",
        img: "https://example.com/images/foundation-empire.jpg",
        authorId: 17,
        genreId: 2,
        describe: "The Foundation faces new threats as the old Empire crumbles. Heroes emerge from unlikely places."
    },
    {
        idBook: 24,
        name: "Second Foundation",
        img: "https://example.com/images/second-foundation.jpg",
        authorId: 17,
        genreId: 2,
        describe: "The mysterious Second Foundation rises. Mind powers and cunning determine the fate of humanity."
    },
    {
        idBook: 25,
        name: "Murder on the Orient Express",
        img: "https://example.com/images/orient-express.jpg",
        authorId: 18,
        genreId: 1,
        describe: "Detective Hercule Poirot investigates a murder aboard a snowbound train. Every passenger hides a secret."
    },
    {
        idBook: 26,
        name: "And Then There Were None",
        img: "https://example.com/images/and-then-there-were-none.jpg",
        authorId: 18,
        genreId: 1,
        describe: "Ten strangers are lured to an isolated island. One by one, they are killed according to a chilling rhyme."
    },
    {
        idBook: 27,
        name: "Alice's Adventures in Wonderland",
        img: "https://example.com/images/alice-wonderland.jpg",
        authorId: 19,
        genreId: 1,
        describe: "Alice falls down a rabbit hole into a fantastical world. Logic twists and imagination runs wild."
    },
    {
        idBook: 28,
        name: "Through the Looking-Glass",
        img: "https://example.com/images/looking-glass.jpg",
        authorId: 19,
        genreId: 1,
        describe: "Alice steps through a mirror into a strange chessboard world. Adventures abound in this curious land."
    },
    {
        idBook: 29,
        name: "Dune",
        img: "https://example.com/images/dune.jpg",
        authorId: 20,
        genreId: 2,
        describe: "Paul Atreides faces betrayal on the desert planet Arrakis. He rises to fulfill a prophecy beyond imagining."
    },
    {
        idBook: 30,
        name: "Dune Messiah",
        img: "https://example.com/images/dune-messiah.jpg",
        authorId: 20,
        genreId: 2,
        describe: "Paul rules as Emperor but struggles against conspiracies. His vision of the future haunts him deeply."
    },
    
    
];

const chapters = [
    { id: 1, bookId: 1, title: "The Boy Who Lived", number: 1 },
    { id: 2, bookId: 1, title: "The Vanishing Glass", number: 2 },
    { id: 3, bookId: 2, title: "The North", number: 1 },
    { id: 4, bookId: 2, title: "Winter is Coming", number: 2 },
    { id: 5, bookId: 3, title: "The Overlook", number: 1 },
    { id: 6, bookId: 3, title: "The Shining", number: 2 },
    { id: 7, bookId: 4, title: "The Party", number: 1 },
    { id: 8, bookId: 4, title: "The Thought Police", number: 2 },
    { id: 9, bookId: 5, title: "The Firemen", number: 1 },
    { id: 10, bookId: 5, title: "The Book Burners", number: 2 },
    { id: 11, bookId: 6, title: "The Dobby Warning", number: 1 },
    { id: 12, bookId: 6, title: "The Heir of Slytherin", number: 2 },
    { id: 13, bookId: 7, title: "The Dementor Attack", number: 1 },
    { id: 14, bookId: 7, title: "The Marauder's Map", number: 2 },
    { id: 15, bookId: 8, title: "The Red Comet", number: 1 },
    { id: 16, bookId: 8, title: "The Battle of Blackwater", number: 2 },
    { id: 17, bookId: 9, title: "The Red Wedding", number: 1 },
    { id: 18, bookId: 9, title: "The Wall Breached", number: 2 },
    { id: 19, bookId: 10, title: "Captain Trips", number: 1 },
    { id: 20, bookId: 10, title: "The Boulder Free Zone", number: 2 },
    { id: 21, bookId: 11, title: "The Losers' Club", number: 1 },
    { id: 22, bookId: 11, title: "Pennywise Awakens", number: 2 },
    { id: 23, bookId: 12, title: "The Rebellion Begins", number: 1 },
    { id: 24, bookId: 12, title: "Napoleon's Rule", number: 2 },
    { id: 25, bookId: 13, title: "Barcelona Arrival", number: 1 },
    { id: 26, bookId: 13, title: "Frontline Struggles", number: 2 },
    { id: 27, bookId: 14, title: "Rocket Summer", number: 1 },
    { id: 28, bookId: 14, title: "The Settlers", number: 2 },
    { id: 29, bookId: 15, title: "Cooger and Dark's Carnival", number: 1 },
    { id: 30, bookId: 15, title: "The Mirror Maze", number: 2 },
    { id: 31, bookId: 16, title: "The Eagle Lost", number: 1 },
    { id: 32, bookId: 16, title: "Sharpe's Triumph", number: 2 },
    { id: 33, bookId: 17, title: "The Crossing", number: 1 },
    { id: 34, bookId: 17, title: "Escape to Safety", number: 2 },
    { id: 35, bookId: 18, title: "An Unexpected Party", number: 1 },
    { id: 36, bookId: 18, title: "Riddles in the Dark", number: 2 },
    { id: 37, bookId: 19, title: "The Council of Elrond", number: 1 },
    { id: 38, bookId: 19, title: "The Mines of Moria", number: 2 },
    { id: 39, bookId: 20, title: "The Black Gate", number: 1 },
    { id: 40, bookId: 20, title: "The Battle of Helm's Deep", number: 2 },
    { id: 41, bookId: 21, title: "The Battle of Gondor", number: 1 },
    { id: 42, bookId: 21, title: "The Final March", number: 2 },
    { id: 43, bookId: 22, title: "The Fall of Trantor", number: 1 },
    { id: 44, bookId: 22, title: "The Psychohistorian", number: 2 },
    { id: 45, bookId: 23, title: "The Battle of the Foundation", number: 1 },
    { id: 46, bookId: 23, title: "The Emperor's Return", number: 2 },
    { id: 47, bookId: 24, title: "The Second Foundation", number: 1 },
    { id: 48, bookId: 24, title: "The Rise of the Machines", number: 2 },
    { id: 49, bookId: 25, title: "The Murder at the Table", number: 1 },
    { id: 50, bookId: 25, title: "The Snowbound Train", number: 2 },
    { id: 51, bookId: 26, title: "The Murderer's Plan", number: 1 },
    { id: 52, bookId: 26, title: "The Last One Standing", number: 2 },
    { id: 53, bookId: 27, title: "The Rabbit Hole", number: 1 },
    { id: 54, bookId: 27, title: "The Mad Tea Party", number: 2 },
    { id: 55, bookId: 28, title: "Through the Looking Glass", number: 1 },
    { id: 56, bookId: 28, title: "The Chessboard Adventure", number: 2 },
    { id: 57, bookId: 29, title: "The Spice Must Flow", number: 1 },
    { id: 58, bookId: 29, title: "The Desert Betrayal", number: 2 },
    { id: 59, bookId: 30, title: "The Emperor's Struggle", number: 1 },
    { id: 60, bookId: 30, title: "The Betrayal of Paul", number: 2 }
];


const chapterContents = [
    {
        bookId: 1,
        chapter: 1,
        content: "Harry Potter, một cậu bé 11 tuổi, sống cùng gia đình Dursley, không hề biết rằng mình là một phù thủy. Vào sinh nhật lần thứ 11, Harry nhận được lá thư từ trường Hogwarts, thông báo về cuộc sống kỳ diệu mà cậu sẽ bắt đầu. Mọi chuyện thay đổi khi cậu gặp Hagrid, người đến đưa cậu đến trường, mở ra cánh cửa một thế giới hoàn toàn mới. Harry không thể tin vào những gì mình nghe được, nhưng sự thật này quá rõ ràng để phủ nhận."
    },
    {
        bookId: 1,
        chapter: 2,
        content: "Harry đã được đưa đến Hogwarts, một trường học ma thuật. Vào đây, cậu gặp gỡ những người bạn mới, như Ron Weasley và Hermione Granger. Tại trường, Harry nhanh chóng nhận ra rằng mình nổi bật hơn người khác, đặc biệt là vì cậu là 'cậu bé sống sót'. Những sự kiện kỳ lạ bắt đầu xảy ra, và Harry bắt đầu tìm hiểu về gia đình và quá khứ của mình. Cậu nhận ra rằng mình có một sứ mệnh quan trọng."
    },
    {
        bookId: 2,
        chapter: 1,
        content: "Bran Stark cùng gia đình lên đường đến một buổi hành hình tại Winterfell. Đây là lần đầu tiên Bran được đi theo cha đến chứng kiến cảnh xét xử của vua. Bran cảm thấy vừa lo lắng, vừa hứng thú, vì đây là một trải nghiệm mới. Cảnh vật hùng vĩ của phương Bắc hiện ra trước mắt cậu, những lâu đài và các bậc thầy xử án. Cuộc sống nơi đây là một chuỗi các quy tắc và truyền thống không thể thay đổi."
    },
    {
        bookId: 2,
        chapter: 2,
        content: "Lực lượng của Vua Robert Baratheon đến Winterfell, chào đón một cuộc hội ngộ lớn giữa các gia đình quý tộc. Đoàn quân hùng hậu dẫn đầu bởi các hiệp sĩ và kỵ sĩ, di chuyển qua cổng thành lớn, tượng trưng cho sức mạnh của vương quốc. Đây là một cuộc hội đàm quan trọng, nơi các thế lực chính trị của phương Bắc và phương Nam gặp nhau để thảo luận về các vấn đề quyền lực và vương quyền."
    },
    {
        bookId: 3,
        chapter: 1,
        content: "Jack Torrance được thuê làm quản lý của khách sạn Overlook, nơi gia đình anh sẽ sống trong suốt mùa đông. Khách sạn rộng lớn và cô đơn, và sự tĩnh lặng của nó dần khiến Jack cảm thấy lo âu. Bất chấp vẻ ngoài lịch sự của Ullman, người quản lý trước đó, Jack nhận thấy rằng có điều gì đó kỳ lạ và không ổn về nơi này. Những dấu hiệu lạ xuất hiện, báo hiệu một điều gì đó nguy hiểm đang chờ đợi họ."
    },
    {
        bookId: 3,
        chapter: 2,
        content: "Danny Torrance, con trai Jack, ngồi chơi trong sân khách sạn Overlook. Cậu bé dường như không quan tâm đến sự u ám của nơi này, nhưng cảm giác bất an cứ gợn lên trong lòng. Danny có một khả năng đặc biệt, ‘the shining’, giúp cậu nhìn thấy những điều không thể thấy. Cậu cảm nhận được một lực lượng mờ ám đang chiếm giữ khách sạn, khiến cậu lo sợ về những điều sẽ xảy ra sau này."
    },
    {
        bookId: 4,
        chapter: 1,
        content: "Winston Smith, nhân vật chính của câu chuyện, sống dưới chế độ độc tài của Đảng, nơi mọi suy nghĩ và hành động của con người đều bị giám sát. Trong một xã hội toàn trị, Winston bí mật phản kháng và tìm cách nhớ lại quá khứ trước khi Đảng kiểm soát hoàn toàn. Tuy nhiên, mỗi bước đi của hắn đều bị giám sát chặt chẽ bởi Thought Police, cơ quan bảo vệ tư tưởng của Đảng."
    },
    {
        bookId: 4,
        chapter: 2,
        content: "Winston dần dần lấn sâu vào cuộc kháng chiến chống lại Đảng khi hắn bắt đầu yêu Julia, một nữ công nhân trong bộ phận sản xuất. Họ gặp nhau trong những cuộc hẹn hò bí mật, nơi họ tìm thấy sự an ủi trong việc chia sẻ những cảm xúc cá nhân. Nhưng cuộc sống trong một thế giới luôn bị giám sát không dễ dàng, và Winston nhận thức rằng bất kỳ ai cũng có thể trở thành mục tiêu của Thought Police."
    },
    {
        bookId: 5,
        chapter: 1,
        content: "Trong một thế giới bị dịch bệnh tàn phá, chỉ còn lại một số ít người sống sót. Nhóm người này tập hợp tại một nơi gọi là Boulder Free Zone, nơi họ xây dựng lại xã hội và cố gắng sinh tồn trong một thế giới hỗn loạn. Trong khi đó, một nhóm những người được gọi là 'The Firemen' đi đến các thành phố, tìm kiếm những người còn sống sót để dập tắt ngọn lửa của sự diệt vong."
    },
    {
        bookId: 5,
        chapter: 2,
        content: "Những người sống sót trong Boulder Free Zone tìm cách xây dựng lại một xã hội mới, tuy nhiên những mối đe dọa luôn rình rập. The Book Burners, nhóm phản diện chính, tiếp tục săn lùng những người còn lại để tiêu diệt những dấu tích của nền văn minh cũ. Trong khi đó, một nhân vật bí ẩn xuất hiện, mang theo một thông điệp về tương lai mà chỉ một vài người hiểu được."
    },
    {
        bookId: 6,
        chapter: 1,
        content: "Dobby, một elfo nhà, cảnh báo Harry Potter về mối nguy hiểm đang chờ đợi cậu tại trường Hogwarts. Dobby yêu cầu Harry không quay lại trường học, nhưng Harry không thể từ bỏ những người bạn và cuộc sống kỳ diệu mà cậu đã tìm thấy. Dobby tiếp tục can thiệp vào cuộc sống của Harry, nhưng cậu bé không hiểu hết được những sự kiện sẽ diễn ra và những mối đe dọa đến từ quá khứ của mình."
    },
    {
        bookId: 6,
        chapter: 2,
        content: "Harry, Ron và Hermione trở lại Hogwarts, nhưng mọi thứ không còn bình yên như trước. Một loạt sự kiện kỳ lạ xảy ra tại trường, và học sinh bắt đầu bị hóa đá. Harry dần khám phá ra mối liên hệ giữa những vụ việc này và sự bí ẩn về Heir of Slytherin. Cậu và các bạn bắt đầu điều tra, tìm hiểu những bí mật bị chôn vùi từ lâu trong trường học, và những nguy hiểm đang rình rập."
    },
    {
        bookId: 7,
        chapter: 1,
        content: "Harry Potter trở lại Hogwarts trong năm học thứ ba. Tại đây, cậu đối mặt với những thử thách mới và một mối đe dọa đáng sợ: các Dementor, những sinh vật tăm tối đến từ thế giới bóng tối. Chúng được gửi đến Hogwarts để bảo vệ trường khỏi một mối nguy hiểm lớn hơn. Mặc dù Harry không hoàn toàn hiểu được nguồn gốc của chúng, cậu nhanh chóng nhận ra rằng Dementors có thể ảnh hưởng đến ký ức và tâm trí của con người."
    },
    {
        bookId: 7,
        chapter: 2,
        content: "Một bí mật bất ngờ được tiết lộ khi Harry, Ron và Hermione khám phá ra Marauder's Map, một bản đồ phép thuật cho phép cậu theo dõi mọi chuyển động trong Hogwarts. Qua bản đồ, Harry nhận thấy một cái tên đã lâu không xuất hiện: Sirius Black. Cậu phát hiện ra rằng Sirius Black, người được cho là kẻ đã phản bội cha mẹ mình, có thể có liên quan đến cậu và sự thật về quá khứ của gia đình Potter."
    },
    {
        bookId: 8,
        chapter: 1,
        content: "Tại King's Landing, cuộc chiến giành quyền lực giữa các gia đình quý tộc ngày càng căng thẳng. Robb Stark, con trai của Eddard Stark, phải đối mặt với những quyết định khó khăn khi các cuộc chiến bắt đầu bùng nổ. Sự xung đột ở phương Bắc không chỉ là một cuộc chiến về quyền lực, mà còn là về danh dự, gia đình và sự tồn vong của một vương quốc. Trong khi đó, Daenerys Targaryen bắt đầu tìm hiểu quyền lực thực sự của mình khi các mối liên kết trong gia đình trở nên rạn nứt."
    },
    {
        bookId: 8,
        chapter: 2,
        content: "Cuộc chiến tại Blackwater diễn ra trong một đêm tăm tối và máu lửa. Các quân đội của Stannis Baratheon tấn công King's Landing trong một trận chiến đầy khốc liệt. Tyrion Lannister, người bảo vệ thành phố, phải sử dụng trí thông minh và chiến thuật để chống lại sự tấn công của đối phương. Những ngọn lửa, những vụ nổ lớn cùng với máu đổ xuống tạo nên một khung cảnh không thể nào quên. Cuộc chiến này định đoạt số phận của thành phố và những nhân vật tham gia vào đó."
    },
    {
        bookId: 9,
        chapter: 1,
        content: "Trong một thế giới đầy sự tàn phá, những người sống sót phải đối mặt với sự lây lan của căn bệnh 'Captain Trips'. Dịch bệnh này đã làm cho hàng triệu người chết, và những người còn lại phải tìm cách sinh tồn trong một thế giới không có luật lệ. Một nhóm người đã tụ tập tại một nơi gọi là 'Boulder Free Zone', nơi họ nỗ lực tái thiết lại xã hội. Tuy nhiên, họ sớm nhận ra rằng họ phải đối mặt với một kẻ thù đáng sợ hơn nhiều so với căn bệnh."
    },
    {
        bookId: 9,
        chapter: 2,
        content: "Nhóm người sống sót trong Boulder Free Zone bắt đầu xây dựng một xã hội mới, nhưng họ không ngờ rằng một thế lực hắc ám đang lặng lẽ theo dõi họ từ xa. Randall Flagg, một nhân vật có quyền năng đen tối, xuất hiện và bắt đầu gây ra những rối loạn và hỗn loạn trong nhóm. Những mối đe dọa từ cả bên ngoài và bên trong sẽ thử thách sự đoàn kết và sức mạnh của họ."
    },
    {
        bookId: 10,
        chapter: 1,
        content: "Những người trong Losers' Club bắt đầu phải đối mặt với nỗi sợ hãi lớn nhất của họ khi họ đối đầu với Pennywise, con quái vật khổng lồ, vô hình trong mắt người lớn. Nhóm bạn nhỏ phải tái hợp sau nhiều năm xa cách để tìm cách đánh bại con quái vật đã đe dọa họ khi còn là trẻ con. Lúc này, sự trưởng thành và sức mạnh của tình bạn là yếu tố quyết định trong cuộc chiến chống lại Pennywise."
    },
    {
        bookId: 10,
        chapter: 2,
        content: "Pennywise thức tỉnh và tiếp tục gieo rắc sự sợ hãi trên thị trấn Derry. Những kỷ niệm đáng sợ của quá khứ lại ùa về với nhóm Losers, khi họ phải đối mặt với những ám ảnh tâm lý của bản thân. Cuộc chiến chống lại Pennywise không chỉ là sự đối đầu vật lý, mà còn là cuộc chiến tinh thần. Lúc này, những mối quan hệ và sự hy sinh giữa họ trở thành chìa khóa để có thể đánh bại sự tàn ác này."
    },{
        bookId: 11,
        chapter: 1,
        content: "The Losers' Club, giờ đây đã trưởng thành, quay lại Derry để đối mặt với những ám ảnh trong quá khứ. Mặc dù họ đã quên đi những gì xảy ra khi còn nhỏ, nhưng sự trở lại của Pennywise buộc họ phải nhớ lại những ký ức đáng sợ và đối mặt với sự thật về con quái vật. Tình bạn gắn bó giữa nhóm bạn là điều duy nhất có thể giúp họ vượt qua những thử thách này."
    },
    {
        bookId: 11,
        chapter: 2,
        content: "Pennywise không chỉ là một con quái vật mà còn là biểu tượng của sự sợ hãi, những nỗi đau trong lòng mỗi người. Nhóm Losers phải đối mặt với những nỗi sợ sâu thẳm trong tâm trí họ. Mỗi người trong nhóm phải chiến đấu với các ám ảnh cá nhân, đồng thời củng cố tình bạn để đánh bại con quái vật này một lần nữa."
    },
    {
        bookId: 12,
        chapter: 1,
        content: "Cuộc nổi dậy chống lại Napoleon bắt đầu với những người nông dân mệt mỏi vì sự áp bức và độc tài của ông. Họ tìm cách lật đổ chính quyền của Napoleon, khôi phục lại tự do và quyền lợi cho tất cả mọi người. Những cuộc chiến nổ ra, những mưu mô và sự phản bội ngày càng gia tăng, nhưng cũng là lúc tinh thần đoàn kết trong cuộc chiến này bắt đầu bùng cháy."
    },
    {
        bookId: 12,
        chapter: 2,
        content: "Napoleon, sau khi chiếm được quyền lực, không còn là người lãnh đạo đầy lý tưởng như trước. Những chính sách của ông ngày càng tàn nhẫn, và những người bạn cũ bắt đầu đặt câu hỏi về lý tưởng của cuộc nổi dậy. Tuy nhiên, với sức mạnh và chiến lược của mình, Napoleon tìm cách duy trì quyền lực và đàn áp bất kỳ sự phản kháng nào."
    },
    {
        bookId: 13,
        chapter: 1,
        content: "Barcelona là điểm đến đầu tiên trong hành trình dài của nhóm phiến quân. Họ phải đối mặt với những thử thách từ chính quyền, nhưng cũng tìm thấy sự giúp đỡ từ những người dân địa phương. Sự xung đột trên chiến trường trở nên gay gắt khi các lực lượng đối địch bắt đầu xuất hiện, và mỗi người trong nhóm phải đối mặt với sự lựa chọn giữa việc chiến đấu và bỏ trốn."
    },
    {
        bookId: 13,
        chapter: 2,
        content: "Cuộc chiến trên tuyến đầu trở nên khốc liệt hơn bao giờ hết. Nhóm phiến quân phải tìm cách phối hợp để đối đầu với những lực lượng mạnh mẽ hơn. Những câu chuyện về lòng dũng cảm và hy sinh lan rộng trong những chiến binh đang chiến đấu vì tự do. Từ sự thất bại đến chiến thắng, mọi quyết định đều mang tính sống còn."
    },
    {
        bookId: 14,
        chapter: 1,
        content: "Rocket Summer đánh dấu sự khởi đầu của cuộc hành trình tới không gian. Những chiếc tên lửa đầu tiên cất cánh trong một mùa hè nóng bỏng, đưa con người tới những địa điểm xa xôi trong vũ trụ. Tuy nhiên, sự khởi đầu này không phải là điều dễ dàng. Căng thẳng và những mối đe dọa từ những thế lực không ai ngờ đến đang chờ đón."
    },
    {
        bookId: 14,
        chapter: 2,
        content: "Những người định cư bắt đầu cuộc sống mới trên các hành tinh xa lạ, nhưng không phải ai cũng tìm được sự yên bình. Trong khi một số chiến đấu để xây dựng một cộng đồng mới, những kẻ khác lại tìm cách chiếm đoạt quyền lực. Những mâu thuẫn ngày càng gia tăng, và mỗi người phải tìm cách tồn tại trong môi trường đầy thử thách này."
    },
    {
        bookId: 15,
        chapter: 1,
        content: "Cooger và Dark's Carnival đến thị trấn với những điều kỳ diệu. Nhưng điều gì đó đáng sợ đang ẩn nấp bên dưới những màn biểu diễn. Những sự kiện lạ lùng bắt đầu xảy ra, và các trẻ em trong thị trấn dần nhận ra rằng những trò chơi và màn ảo thuật không chỉ là để vui chơi. Một bí mật tối tăm đang dần được hé lộ."
    },
    {
        bookId: 15,
        chapter: 2,
        content: "Nhóm bạn trẻ bắt đầu khám phá những bí mật đen tối của Cooger và Dark's Carnival. Một trong những trò chơi trở thành một cạm bẫy chết chóc, và các thành viên trong nhóm phải đối mặt với nỗi sợ hãi lớn nhất của mình. Cả nhóm quyết định phải phá hủy carnival để ngừng những sự kiện khủng khiếp này."
    },
    {
        bookId: 16,
        chapter: 1,
        content: "The Eagle Lost là câu chuyện về một đội quân trong một cuộc chiến tranh kéo dài, nơi các chiến binh phải chiến đấu không chỉ vì đất nước mà còn vì danh dự cá nhân. Tuy nhiên, họ sớm nhận ra rằng sự chiến đấu không phải lúc nào cũng chỉ vì lý tưởng, mà còn là vì sự sinh tồn."
    },
    {
        bookId: 16,
        chapter: 2,
        content: "Sharpe's Triumph là một câu chuyện về sự chiến thắng của một chiến binh trên chiến trường, mặc dù phải đối mặt với rất nhiều thử thách. Sharpe, người lính dũng cảm, phải vượt qua sự phản bội và mưu đồ của kẻ thù để giành chiến thắng trong một trận chiến đầy khốc liệt."
    },
    {
        bookId: 17,
        chapter: 1,
        content: "The Crossing là cuộc hành trình nguy hiểm của một nhóm người khi họ cố gắng vượt qua một vùng đất hoang vu để tìm kiếm tự do. Những thử thách, sự phản bội và mâu thuẫn trong nhóm ngày càng gia tăng khi họ đối mặt với những kẻ thù không ai ngờ đến."
    },
    {
        bookId: 17,
        chapter: 2,
        content: "Escape to Safety là hành trình của những người sống sót khi họ tìm cách trốn thoát khỏi sự đe dọa của kẻ thù. Tuy nhiên, sự sống sót không phải lúc nào cũng đồng nghĩa với sự bình yên, và họ phải tiếp tục chiến đấu cho tương lai của mình."
    },
    {
        bookId: 18,
        chapter: 1,
        content: "An Unexpected Party là một câu chuyện về một cuộc phiêu lưu bất ngờ bắt đầu khi một nhóm người bạn tụ tập để tham gia một bữa tiệc đầy bí ẩn. Mặc dù cuộc gặp gỡ này mang tính chất vui vẻ ban đầu, nhưng sự thật về một nhiệm vụ quan trọng dần dần được hé lộ."
    },
    {
        bookId: 18,
        chapter: 2,
        content: "Riddles in the Dark là câu chuyện về một cuộc phiêu lưu trong bóng tối, nơi những bí mật được khám phá. Nhóm bạn phải giải quyết những câu đố phức tạp để tìm ra con đường tiếp theo trong hành trình của họ. Những thử thách đang chờ đợi và sự hiểm nguy luôn lơ lửng trên đầu họ."
    },
    {
        bookId: 19,
        chapter: 1,
        content: "The Council of Elrond là cuộc họp quan trọng trong cộng đồng của các chủng tộc khác nhau để thảo luận về cuộc chiến chống lại cái ác. Những quyết định quan trọng sẽ được đưa ra, và mỗi nhân vật đều có mục tiêu riêng của mình, nhưng tất cả đều phải hợp tác vì một mục đích chung."
    },
    {
        bookId: 19,
        chapter: 2,
        content: "The Mines of Moria là một phần trong hành trình tìm kiếm cái ác bị đe dọa, nơi nhóm anh hùng phải đối mặt với sự nguy hiểm trong lòng đất. Những sinh vật tăm tối ẩn náu trong Moria, và cuộc chiến chống lại chúng sẽ là một thử thách lớn đối với tất cả."
    },
    {
        bookId: 20,
        chapter: 1,
        content: "The Black Gate là cánh cổng dẫn vào thế giới tối tăm, nơi những bí mật và sức mạnh hắc ám đang chờ đợi. Nhóm anh hùng chuẩn bị đối mặt với những thử thách đầy nguy hiểm khi họ tiến gần đến mục tiêu quan trọng trong hành trình của mình."
    },
    {
        bookId: 20,
        chapter: 2,
        content: "The Battle of Helm's Deep là trận chiến quyết định giữa cái thiện và cái ác. Những chiến binh dũng cảm phải bảo vệ ngôi làng của họ trước sự tấn công của kẻ thù. Những thử thách và sự hy sinh của từng chiến binh tạo nên một trận chiến bất ngờ và đầy cảm xúc."
    },
    {
        bookId: 21,
        chapter: 1,
        content: "The Battle of Gondor là một trận chiến lớn trong thế giới của các vương quốc, nơi sự sống và cái chết đối mặt trong một cuộc chiến không khoan nhượng. Những chiến binh đến từ nhiều vùng đất phải hợp lực để bảo vệ thành trì cuối cùng."
    },
    {
        bookId: 21,
        chapter: 2,
        content: "The Final March là hành trình cuối cùng của những chiến binh dũng cảm, nơi họ phải đối mặt với thử thách cuối cùng để cứu lấy thế giới. Những quyết định lớn và sự hy sinh cá nhân sẽ quyết định số phận của cả nhân loại."
    },{
        bookId: 22,
        chapter: 1,
        content: "The Arrival of Winter đưa người đọc vào một thế giới đầy băng giá và những thử thách khắc nghiệt. Một đội quân nhỏ phải chiến đấu không chỉ với kẻ thù mà còn với thiên nhiên, khi mùa đông bao trùm toàn bộ vùng đất. Những mưu đồ và chiến lược xuất hiện, nhưng một sự thay đổi lớn sắp đến."
    },
    {
        bookId: 22,
        chapter: 2,
        content: "The Battle for the North là cuộc chiến giữa các vương quốc phía Bắc và thế lực hắc ám từ những vùng đất xa xôi. Quân đội được huy động và những chiến binh kiên cường phải chiến đấu bảo vệ đất đai của mình. Từng bước đi trong trận chiến này có thể thay đổi cục diện cuộc chiến lâu dài."
    },
    {
        bookId: 23,
        chapter: 1,
        content: "A King's Command kể về những sự kiện dẫn đến cuộc nổi dậy của một quốc gia. Nhà vua, dù là người lãnh đạo tài giỏi, nhưng quyết định của ông dường như dẫn đến những hậu quả không lường trước được. Một lời gọi đến từ những người yêu nước thúc đẩy dân chúng chiến đấu chống lại những thế lực đen tối."
    },
    {
        bookId: 23,
        chapter: 2,
        content: "The Final Judgment diễn ra khi tất cả những âm mưu dần sáng tỏ. Các quốc gia liên minh buộc phải đưa ra quyết định quan trọng trong việc chiến đấu vì tự do và hòa bình. Những trận chiến cuối cùng sẽ là thử thách lớn nhất đối với những người lãnh đạo."
    },
    {
        bookId: 24,
        chapter: 1,
        content: "Into the Wild là một hành trình mới khi nhóm phiêu lưu bắt đầu bước vào vùng đất hoang dã, nơi mà mọi thứ đều có thể xảy ra. Họ phải học cách sinh tồn và đối mặt với những mối nguy hiểm tiềm tàng từ những sinh vật lạ lùng và những thử thách đến từ thiên nhiên."
    },
    {
        bookId: 24,
        chapter: 2,
        content: "The Hunt for the Beast kể về một cuộc săn lùng con quái vật huyền thoại, mà theo truyền thuyết, có thể quyết định sự sống còn của cả thế giới. Các chiến binh và những người tìm kiếm phải chiến đấu không chỉ chống lại con quái vật mà còn phải đối mặt với sự phản bội từ chính những người đồng hành."
    },
    {
        bookId: 25,
        chapter: 1,
        content: "The Enchanted Forest là nơi bắt đầu cuộc hành trình của những chiến binh trẻ tuổi, nơi họ phải vượt qua những khu rừng huyền bí đầy cạm bẫy và quái vật. Sự lựa chọn khó khăn đã đưa họ vào một cuộc hành trình mà không ai biết sẽ kết thúc như thế nào."
    },
    {
        bookId: 25,
        chapter: 2,
        content: "The Curse of the Witch là câu chuyện về một lời nguyền cổ xưa của một phù thủy quyền lực. Để cứu thế giới, các nhân vật phải tìm cách giải lời nguyền này và đối mặt với những hiểm nguy đến từ sức mạnh ma thuật vượt xa những gì họ tưởng tượng."
    },
    {
        bookId: 26,
        chapter: 1,
        content: "The Great Divide diễn ra khi những người sống sót trong một cuộc chiến tranh khốc liệt phải quyết định xem họ sẽ sống sót thế nào trong một thế giới đã bị chia cắt. Những phân chia giữa các nhóm đối lập ngày càng sâu sắc, và tương lai trở nên mờ mịt."
    },
    {
        bookId: 26,
        chapter: 2,
        content: "Beyond the Wall là câu chuyện về những người vượt qua bức tường lớn, nơi mà mọi thứ đều được bao phủ bởi sự hoang tàn và không có ai sống sót. Những chiến binh phải tìm cách vượt qua vùng đất này để cứu lấy thế giới của họ khỏi sự hủy diệt."
    },
    {
        bookId: 27,
        chapter: 1,
        content: "The Fallen Kingdom kể về một vương quốc từng hùng mạnh nay đã bị sụp đổ. Những kẻ sống sót trong vương quốc đó phải tìm cách sinh tồn trong một thế giới không còn sự bảo vệ của quân đội và những triều đại đã từng cai trị. Lãnh đạo mới phải xuất hiện để dẫn dắt người dân."
    },
    {
        bookId: 27,
        chapter: 2,
        content: "A New Dawn diễn ra khi những người sống sót bắt đầu xây dựng lại từ những tàn tích của vương quốc xưa. Một hy vọng mới được nhen nhóm, nhưng đồng thời, những thử thách và nguy cơ mới bắt đầu lộ diện, đe dọa đẩy họ vào một cuộc chiến mới."
    },
    {
        bookId: 28,
        chapter: 1,
        content: "The Silent Sea là câu chuyện về một nhóm phi hành gia thực hiện một chuyến bay đến một hành tinh xa xôi. Họ không chỉ phải đối mặt với những mối nguy hiểm ngoài vũ trụ mà còn phải đối diện với những bí mật đen tối của chính hành tinh mà họ đang thám hiểm."
    },
    {
        bookId: 28,
        chapter: 2,
        content: "The Shattered Star tiếp tục cuộc phiêu lưu trong không gian, khi nhóm phi hành gia phát hiện ra một vật thể ngoài hành tinh có sức mạnh khủng khiếp. Để ngừng sự hủy diệt, họ phải đối mặt với những thế lực đang tìm cách chiếm đoạt vật thể này."
    },
    {
        bookId: 29,
        chapter: 1,
        content: "The Fire Within là một câu chuyện về những người mang trong mình khả năng đặc biệt - những người có thể điều khiển ngọn lửa. Cuộc sống của họ là một sự kết hợp giữa sức mạnh và nguy hiểm. Một nhóm phải tìm cách kiểm soát sức mạnh này để bảo vệ thế giới khỏi sự hủy diệt."
    },
    {
        bookId: 29,
        chapter: 2,
        content: "The Last Flame là cuộc chiến cuối cùng của những chiến binh lửa. Khi thế giới bị đe dọa bởi sự tàn phá từ một ngọn lửa không thể kiểm soát, các chiến binh phải quyết định làm thế nào để tiêu diệt nguồn gốc của ngọn lửa và cứu lấy thế giới khỏi sự diệt vong."
    },
    {
        bookId: 30,
        chapter: 1,
        content: "The Emperor's Struggle kể về cuộc đấu tranh cam go của vị hoàng đế, người đang tìm cách duy trì quyền lực trong một đế chế đang trên bờ vực suy tàn. Các đối thủ chính trị và những kẻ phản bội trong nội bộ đang tìm cách chiếm đoạt ngai vàng."
    },
    {
        bookId: 30,
        chapter: 2,
        content: "The Betrayal of Paul là câu chuyện về sự phản bội từ chính những người thân cận nhất của Paul, một lãnh đạo trẻ tuổi. Trong khi chiến tranh bùng nổ, sự kiện này sẽ thay đổi hoàn toàn cục diện chính trị và tương lai của đế chế. Paul phải đối mặt với những lựa chọn khó khăn và khám phá ra sự thật ẩn giấu trong bóng tối."
    },
];
module.exports = {
    authors,
    genres,
    books,
    chapters,
    chapterContents
};