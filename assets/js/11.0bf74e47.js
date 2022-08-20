(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{414:function(e,n,a){"use strict";a.r(n);var v=a(1),t=Object(v.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("**1.**"),n("strong",[e._v("Representation Learning for Attributed Multiplex")]),e._v(" "),n("strong",[e._v("Heterogeneous Network")])]),e._v(" "),n("p",[n("strong",[e._v("属性（顶点有特征嵌入）多路（多种边类型）异构网络")])]),e._v(" "),n("p",[e._v("**阅读时间：**"),n("strong",[e._v("22.8.8")])]),e._v(" "),n("p",[e._v("**发表时间：**"),n("strong",[e._v("19.5.20")])]),e._v(" "),n("p",[e._v("**发表会议：**"),n("strong",[e._v("KDD")])]),e._v(" "),n("p",[n("strong",[e._v("来源：论文一相关")])]),e._v(" "),n("p",[n("strong",[e._v("关联文章：")])]),e._v(" "),n("p",[n("strong",[e._v("“Heterogeneous Mini-Graph Neural Network and Its")]),e._v(" "),n("strong",[e._v("Application to Fraud Invitation Detection”（被引）")])]),e._v(" "),n("p",[n("strong",[e._v("主题：异构图、大规模图")])]),e._v(" "),n("p",[n("strong",[e._v("模型名称：GATNE-T")]),e._v(" "),n("strong",[e._v("/")]),e._v(" **GATNE-**"),n("strong",[e._v("I")])]),e._v(" "),n("p",[n("strong",[e._v("主要内容：")])]),e._v(" "),n("ol",[n("li",[e._v("研究目标：给定G=(v,ε,A)，首先按照边的种类将图分为多路，目标是为每类边分成的子图找到一个顶点映射函数f_R: v->R^d")]),e._v(" "),n("li",[e._v("研究原因：")])]),e._v(" "),n("p",[e._v("现实世界中的网络结构不仅包含多类型的节点和/或边，而且还包含一组丰富的属性。主要研究不同类型的节点与多个不同类型的边相关联，每个节点与一组不同的属性相关联的情况。")]),e._v(" "),n("p",[e._v("例如，在电子商务系统中，用户可能对商品有几种类型的交互，例如单击、转换、添加到购物车、添加到首选项。显然，“使用者”与“物品”具有本质上的不同属性，不能平等对待。此外，不同的用户-道具互动意味着不同的兴趣水平，应该区别对待。")]),e._v(" "),n("ol",[n("li",[e._v("相关研究：")])]),e._v(" "),n("p",[e._v("DeepWalk[27]、LINE[35]和node2vec[10]是将深度学习技术引入网络分析来学习节点嵌入的开创性工作。NetMF[29]给出了不同网络嵌入算法的等价性理论分析，NetSMF[28]通过稀疏化给出了可扩展的解决方案。然而，它们只被设计用于处理具有单一类型节点和边的同构网络。最近，PTE[34]、metapath2vec[7]和HERec[31]被提出用于异构网络。")]),e._v(" "),n("p",[e._v("网络嵌入的工作主要包括两类:图嵌入(GE)和图神经网络(GNN)。GE的代表作包括DeepWalk[27]，它通过随机游走在图上生成语料库，然后在语料库上训练跳图模型。LINE[35]学习大规模网络上的节点表示，同时保留一阶和二阶邻近性。Node2vec[10]设计了一个有偏差的随机漫步过程来有效地探索不同的社区。NetMF[29]是一个统一的矩阵分解框架，用于从理论上理解和改进DeepWalk和LINE。")]),e._v(" "),n("p",[e._v("对于GNN中的流行作品，GCN[19]使用卷积操作将邻居的特征表示合并到节点特征表示中。GraphSAGE[11]提供了一种归纳方法来将结构信息与节点特性结合起来。它学习函数表示，而不是直接嵌入每个节点，这有助于它在训练期间对未观察到的节点进行归纳。")]),e._v(" "),n("p",[e._v("异构网络嵌入: HNE[3]联合考虑网络的内容和拓扑结构，将异构网络中的不同对象表示为统一的向量表示。PTE[34]利用标记信息和不同层次的词共现信息构建大规模的异构文本网络，并将其嵌入到低维空间中。Metapath2vec[7]将基于元路径的随机漫步形式化，构建节点的异构邻域，然后利用异构跳克模型进行节点嵌入。HERec[31]使用一种基于元路径的随机行走策略来生成有意义的节点序列来学习网络嵌入，这些嵌入首先通过一组融合函数进行转换，然后集成到一个扩展的矩阵分解(MF)模型中。")]),e._v(" "),n("p",[e._v("Multiplex Heterogeneous Network Embedding.")]),e._v(" "),n("p",[e._v("Attributed Network Embedding.")]),e._v(" "),n("p",[e._v("[27]Bryan Perozzi, Rami Al-Rfou, and Steven Skiena. 2014. Deepwalk: Online learning")]),e._v(" "),n("p",[e._v("of social representations. In KDD’14. ACM, 701–710.")]),e._v(" "),n("p",[e._v("[35]Jian Tang, Meng Qu, Mingzhe Wang, Ming Zhang, Jun Yan, and Qiaozhu Mei. 2015.")]),e._v(" "),n("p",[e._v("Line: Large-scale information network embedding. In WWW’15. 1067–1077.")]),e._v(" "),n("p",[e._v("[10]Aditya Grover and Jure Leskovec. 2016. node2vec: Scalable feature learning for")]),e._v(" "),n("p",[e._v("networks. In KDD’16. ACM, 855–864.")]),e._v(" "),n("p",[e._v("[29]Jiezhong Qiu, Yuxiao Dong, Hao Ma, Jian Li, Kuansan Wang, and Jie Tang. 2018.")]),e._v(" "),n("p",[e._v("Network embedding as matrix factorization: Unifying deepwalk, line, pte, and")]),e._v(" "),n("p",[e._v("node2vec. In WSDM’18. ACM, 459–467.")]),e._v(" "),n("p",[e._v("[28]Jiezhong Qiu, Yuxiao Dong, Hao Ma, Jian Li, Chi Wang, Kuansan Wang, and")]),e._v(" "),n("p",[e._v("Jie Tang. 2019. NetSMF: Large-Scale Network Embedding as Sparse Matrix")]),e._v(" "),n("p",[e._v("Factorization. In WWW’19.")]),e._v(" "),n("p",[e._v("[34]Jian Tang, Meng Qu, and Qiaozhu Mei. 2015. Pte: Predictive text embedding")]),e._v(" "),n("p",[e._v("through large-scale heterogeneous text networks. In KDD’15. ACM, 1165–1174.")]),e._v(" "),n("p",[e._v("[7]Yuxiao Dong, Nitesh V Chawla, and Ananthram Swami. 2017. metapath2vec:")]),e._v(" "),n("p",[e._v("Scalable representation learning for heterogeneous networks. In KDD’17. ACM,")]),e._v(" "),n("p",[e._v("135–144.")]),e._v(" "),n("p",[e._v("[31]Chuan Shi, Binbin Hu, Xin Zhao, and Philip Yu. 2018. Heterogeneous Information")]),e._v(" "),n("p",[e._v("Network Embedding for Recommendation. TKDE (2018).")]),e._v(" "),n("p",[e._v("[11] Will Hamilton, Zhitao Ying, and Jure Leskovec. 2017. Inductive representation")]),e._v(" "),n("p",[e._v("learning on large graphs. In NIPS’17. 1024–1034.")]),e._v(" "),n("p",[e._v("[3] Shiyu Chang, Wei Han, Jiliang Tang, Guo-Jun Qi, Charu C Aggarwal, and")]),e._v(" "),n("p",[e._v("Thomas S Huang. 2015. Heterogeneous network embedding via deep archi-")]),e._v(" "),n("p",[e._v("tectures. In KDD’15. ACM, 119–128.")])])}),[],!1,null,null,null);n.default=t.exports}}]);