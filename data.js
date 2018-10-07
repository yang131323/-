const photo = require('./static/photo');

const person = {
  data: {
    name: 'willKing O',
    birth: '1987.11.11',
    email: 'yang@gmail.com',
    career: 'Front End Developer',
    interest: 'Music MOvie Techique',
    introduction: `籍贯：杭州                                                                
    学历：本科                                                                
    座右铭：永不放弃                                                                
    毕业院校：杭州师范学院外国语，获文学学士学位。                                                                                                                                    
    名言：短暂的激情是不值钱的，只有持久的激情才是赚钱的。                                                                
    求学时代                                                                
    1982年 18岁，马云高中毕业，参加第一次高考，结果数学才考了1分，高考落榜 .                                                                
    1983年 19岁，第一次落榜后马云就参加了工作，当过秘书，也做过搬运工作，踩着三轮车帮人家把书刊扎在一起，25本成一包，踩10公里路通过火车转发到其他地方后来看了一部路遥写的人生的小说，改变了马云的想法，让他决定重新参加高考而且一定要上大学可惜，第二次参加高考，还是落榜了，数学才考了19分.                                                                
    1984年 20岁，马云坚持自己的想法，继续努力，白天上班晚上上夜校最后参加第三次高考，功夫不负有心人，这次终于考上了杭州师范学院外语系外语外贸专业的专科，离本科差5分，但本科没招满人，马云幸运地上了本科另外，这次高考马云的数学考了89分，有些出人意料                                                                
    1985年 21岁，大一下学期，马云在一位过去在西湖边学英语时认识的外国朋友的帮助下去了一趟澳大利亚，这是马云第一次走出国门                                                                                                                                
    1986-1988 大学学习阶段，除了继续学习英语，马云还把许多精力转到学生工作上，不仅顺利当选为学校学生会主席，                                                                                                                                    
    还再接再厉登上了杭州市学联主席的位置在这期间，马云不仅结识了日后成为其夫人的张英，还结识了一大批朋友，这里面有些人后来成为马云创业时的事业伙伴和重要助手   1988年 24岁，马云大学毕业，分配到杭州电子工业学院[现为杭州电子科技大学]教英文（英文及国际贸易讲师），成为杭州师范学院当年所有500名毕业生中唯一能去大学教书的人，其他人都去了中学教书                                                                
    马云之所以会取得今天的成绩，与他三年的复读生涯相当重要，在后来杨澜采访他时，这么久了，为什么他还在说前两天做了个考数学的噩梦？看似很小的事情为什么他还要在今天相当成功的时候提出来？有没有必然性呢？在他小时候所受到的挫折？在复读时候边打工边复习，数学总是几分，这些事给他的阴影是如此正是自己不舍的追求扛住了，所以进入了大学即使后来的大学甚至是个专科，但这种成就感是很重要的，每个复读过的人是会有这样的体会的进大学后得到的这种解脱让他看到了新的希望，也更加肯定了自己，后来正因为他要更加肯定这一点，所以在早期积累的英语水平让他如虎添翼，很快就达到了一个很好的高度，这样他的人生才刚开始腾飞复读生涯给他的是什么？其一：事情总有困难而无法克服的一面，以致到今天依然害怕数学，但总有一天会过去其二：正因为复读给他的痛苦，所以后来的日子里总是在寻求不断证明自己的机会，好像在不断                                                                                                                                    
    的给以前的自己解脱反观后来公司的发展，正是如此，无论是翻译社，还是中国黄页，阿里巴巴，都走过了那比较痛苦的复读生涯，而后来正是马云在复读生涯中获得的启示，让他觉得自己总会成功，即使不会成功也会有个比较不失败的前途（就像当年考取师专而不是本科），就像寒冬中希望我们是最后一个死去的人宣言一样再加上不断证明自己的不断给自己解脱的那种强大动力，让自己不仅仅只是做了个讲师，做了个翻译社的老总，做了个阿里巴巴的ceo，而是要做世界的number1.都源于此！`
  },
  prompt: {
    name: 'Name',
    birth: 'Birth',
    email: 'E-mail',
    career: 'Career',
    interest: 'Interest',
    introduction: 'About Me'
  }
};

const articleArr = [
{
  id: 'A-23423',
  photo: photo.photoOne,
  title: '思想,是不过时的美丽',
  pubdate: '2018-04-23 21:30',
  article: '心中，那个月亮弯，停泊着历史的古船，沉淀着文化的靛蓝，静静地，为你守盼，那份真实的灿烂。--题记',
  author: '@willKing O'
}, {
  id: 'A-24323',
  photo: photo.photoOne,
  title: '微笑是一把神奇的钥匙 ',
  pubdate: '2008-05-23 01:30',
  article: '很喜欢一个人捧着茶杯品茶的感觉。渐渐西斜的残阳，一抹霞红穿透剔亮的玻璃，掩映着书房里一排排古色发黄的线装书。一腾热气冲淡了黄昏，凝缩的那份脆干的青绿在热水中翻跃，升腾，一旦浸润了湿，就贪婪地吮吸久违的甘露，伸伸懒腰，缓缓的，蹬蹬腿，在古铜色的花杯中舒展开久封的筋骨。于是，脉胳渐显了，青绿在热水中延散了，一片片风干的茶叶在浸润中寻到了绿的真实，回到了曾在树枝上招摇的青春与真实，清清的，露珠，泥土的味道弥漫在小屋，一份还真带来的醉香荡漾在心头。',
  author: '@willKing O'
}, {
  id: 'A-25423',
  photo: photo.photoOne,
  title: '将奉献进行到底 ',
  pubdate: '2018-01-23 20:20',
  article: '因为品茶，因为爱真，谈及历史，谈及文化，也守着不变的概念--真。',
  author: '@willKing O'
}, {
  id: 'B-29823',
  photo: photo.photoOne,
  title: '揣好梦想上路 ',
  pubdate: '2018-11-22 11:30',
  article: '我的书架上有着古老而真实的文化，明刻本，线装书，发黄的记忆，永久的思索，不管春温秋肃，还是大喜悦大悲愤，捧起一本原版古书，放在心头，最后总得要闭一闭眼睛，平一平心跳，回归于历史的冷漠，理性的严峻，从一页页几欲风干的书页中，我品到了一份历史的真实，文化的真实',
  author: '@willKing O'
}, {
  id: 'A-20923',
  photo: photo.photoOne,
  title: '遗忘教你洒脱',
  pubdate: '2013-02-23 21:30',
  article: '从未想过要为文化说点什么，只到昨天，同学凌到我家，对着这一排排原版古旧的陈书而大笑，"你真傻，何不买几张电脑光盘，既不需像你这样旧书堆得似山高，又不需捧着文言实虚词嚼半日却难解其内容。"我先是惊愕，继而苦笑。莫名中有丝淡淡的哀愁，名着古书融注于光盘，竟还翻译成浅显易懂的白话文，我不敢想，我不知道"两弯似蹙非蹙绢烟眉，一双似喜非喜含情目"该怎样翻译，我不知道"态生两靥之愁，娇袭一身之病"用时髦的白话文该怎么讲，我不知道"冷雨敲碎吟上心"的心情用白话文如何描绘，又如何让读者真正领会？古典的故事，历史的沉重又怎能用一两句干巴浅显的白话文阐释得清？',
  author: '@willKing O'
}, {
  id: 'A-23403',
  photo: photo.photoOne,
  title: '滴滴香浓,意犹未尽',
  pubdate: '2007-09-23 21:30',
  article: '还记得余秋雨写在《藏书》中的那句话，当学生问他为何藏如此多明刻线装书，藏这些原版发黄的记忆时，他说："那是历史风尘，旧得有味，真实。"是的，原版的文言书固然难读难懂，但有厚度，一旦失去了原版的真实，几句白话文，简写本已失去了厚度，很容易被岁月长河风干，甚至脆折。',
  author: '@willKing O'
}, {
  id: 'A-234323',
  photo: photo.photoOne,
  title: '"英雄"岂可到"无用武之地” ',
  pubdate: '2009-09-29 09:29',
  article: '能去做好自己想做的事情是幸福的，战胜了坎坷后的美好幸福是更加耀眼的。用自己的心悄悄的感受到一种美妙的流动，滴落心田，荡漾开来，这个就是幸福的滋味吧。',
  author: '@willKing O'
}, {
  id: 'A-238984',
  photo: photo.photoOne,
  title: '思想,是不过时的美丽',
  pubdate: '2018-04-23 21:30',
  article: '心中，那个月亮弯，停泊着历史的古船，沉淀着文化的靛蓝，静静地，为你守盼，那份真实的灿烂。--题记',
  author: '@willKing O'
  }
];

const personLink = {
  contacts: ['www.baidu.com', 'cn.bing.com', 'www.google.com', 'www.github.com', 'www.juejin.im'],
  icons: ['google', 'facebook', 'wechat', 'qq', 'weibo']
}

module.exports = {
  person: person,
  article: articleArr,
  personLink: personLink
}