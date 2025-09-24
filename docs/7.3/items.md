# Adding items

## 1. Creating an Item Class
To add a new item to BTA, you first need to create a class for it.
You can do this by extending Minecrafts Item class.

```java 
package your.examplemod.items;
import net.minecraft.core.item.Item;

public class ExampleItem extends Item {
	public ExampleItem(String translationKey, String namespaceId, int itemId ) {
		 super(translationKey, namespaceId, itemId);
	}
}
```

## 1.5 Instanciating your Item Class
By default, your item class will take three arguments:

1. translationKey - used to translate your item, has to be unique
2. namespaceId - A string used to identify your item, has to be unique. The Format for this is "Namespace:Value".
2. itemId - A number used to identify your Item, has to be unique.

```java 
new ExampleItem("ExampleItem", ExampleMod.MOD_ID + ":ExampleItem", 30000)
```

It is advisable to create a helper method for generating items Numeric Ids.
```java
public static int newItemID() {
    ITEM_ID = ITEM_ID + 1;
    return ITEM_ID;
}
```


## 2. Creating your Item
To add your Item to the game, you need to instanciate it in the beforeGameStart function.  
You can do this by using the Item Builder.

```java
public static Item ExampleItem;
private static int currentItemID = 30000;

ItemBuilder GenericItemBuilder = new ItemBuilder(ExampleMod.MOD_ID);

private static int newItemID() {
	return currentItemID++;
}


@Override
public void beforeGameStart() {
    ExampleItem = GenericItemBuilder
        .build(new ExampleItem("ExampleItem", ExampleMod.MOD_ID + ":ExampleItem", newItemID()));
}
```

The first argument here is your newly instanciated Item, the second is the numerical Item Id.  
