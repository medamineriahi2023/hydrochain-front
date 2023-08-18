Documentation du Strapi JS :

  

## Créer un nouveau projet avec Strapi JS :

Exécutez la commande suivante dans un terminal :

**npx create-strapi-app@latest my-project --quickstart**

  

### Enregistrez le premier utilisateur administrateur

Une fois l'installation terminée, votre navigateur ouvre automatiquement un nouvel onglet.

En remplissant le formulaire, vous créez votre propre compte. Une fois cela fait, vous devenez le premier utilisateur administrateur de cette application Strapi.

Vous avez maintenant accès au panneau d'administration
  


## Créez votre contenu

  

Le panneau d'administration de Strapi s'exécute sur [http://localhost:1337/admin](http://localhost:1337/admin) . C'est là que vous passerez le plus clair de votre temps à créer et mettre à jour du contenu.

  

### : Créer des types de collection avec le générateur de type de contenu

Le plugin Content-type Builder vous aide à créer votre structure de données. Lors de la création d'un projet vide avec Strapi.

#### Créer un type

1.  Cliquez sur le bouton Créer votre premier type de contenu .  
    S'il ne s'affiche pas, accédez à Plugins [Content-type Builder](http://localhost:1337/admin/plugins/content-type-builder) dans la navigation principale.
    
2.  Cliquez sur Créer un nouveau type de collection .
    
3.  Saisissez Service le nom d'affichage , puis cliquez sur Continuer .
    
4.  Cliquez sur le champ Texte.
    
5.  Tapez Name dans le champ Nom .
    
6.  Passez à l' onglet Paramètres avancés et cochez les champs Requis et les paramètres de champ Unique .
    
7.  Cliquez sur Ajouter un autre champ .
    
8.  Choisissez le champ Texte enrichi.
    
9.  Tapez Description dans le champ Nom , puis cliquez sur Terminer .
    
10.  Enfin, cliquez sur Enregistrer et attendez que Strapi redémarre.
    

  

Une fois Strapi redémarré, "Services" est répertorié sous Gestionnaire de contenu > Types de collection dans la navigation.

#### Créer un type

comportait certaines contacts. Créons un type de collection "Contacts":

1.  Accédez à Plugins [Content-type Builder](http://localhost:1337/admin/plugins/content-type-builder) dans la navigation principale.
    
2.  Cliquez sur Créer un nouveau type de collection .
    
3.  Saisissez Contatct le nom d'affichage , puis cliquez sur Continuer .
    
4.  Cliquez sur le champ Texte.
    
5.  Tapez Name dans le champ Nom .
    
6.  Passez à l' onglet Paramètres avancés et cochez les champs Requis et les paramètres de champ Unique .
    
7.  Cliquez sur Ajouter un autre champ .
    
8.  Choisissez le champ Relation.
    

#### Créer une entrée pour le type

1.  Accédez à [Gestionnaire de contenu > Types de collections -Services dans la navigation.
    
2.  Cliquez sur Créer une nouvelle entrée .
    
3.  Tapez le nom de votre service local préféré dans le champ Nom . Disons que c'est Recrutment.
    
4.  Dans le champ Description , écrivez quelques mots à ce sujet. Si vous manquez d'inspiration, vous pouvez utiliser Vous définissez avec l’un de nos consultants vos critères (candidat idéal, votre contexte, vos souhaits), nous évaluons ensemble la faisabilité du projet.
    
5.  Cliquez sur Enregistrer .
    

### Définir les rôles et les autorisations

Nous venons d'ajouter un service et un contact. Nous avons maintenant suffisamment de contenu à consommer . Mais d'abord, nous devons nous assurer que le contenu est accessible au public via l'API :

1.  Cliquez sur Paramètres généraux en bas de la navigation principale.
    
2.  Sous Plugin Utilisateurs et autorisations , choisissez Rôles
    
3.  Cliquez sur le rôle Public .
    
4.  Faites défiler vers le bas sous Autorisations .
    
5.  Dans l' onglet Autorisations , recherchez Service et cliquez dessus.
    
6.  Cochez les cases à côté de find et findOne .
    
7.  Répétez avec contact : cochez les cases à côté de find et findOne .
    
8.  Enfin, cliquez sur Enregistrer .
    

  

### Publiez le contenu

Par défaut, tout contenu que vous créez est enregistré en tant que brouillon. Publions nos catégories et notre service.

Tout d'abord, accédez à [Gestionnaire de contenu > Types de collections -Service . De là:

1.  Cliquez sur l'entrée.
    
2.  Sur l'écran suivant, cliquez sur Publier .
    
3.  Dans la fenêtre de confirmation , cliquez sur Oui, publier .
    

Ensuite, revenez à la liste des contacts et répétez l'opération pour une autre entrée.

Enfin, pour publier votre service préféré, accédez à [Gestionnaire de contenu > Types de collections - Services , cliquez sur l'entrée du service et publiez -la.

  

### Utiliser l'API

féliciter, mais vous n'avez pas encore vu le résultat final de votre travail acharné.

Et voilà : la liste des services est accessible sur [http://localhost:1337/api/services](http://localhost:1337/api/services) .
ainsi que la liste des contacts [http://localhost:1337/api/contacts](http://localhost:1337/api/contacts) .

  
