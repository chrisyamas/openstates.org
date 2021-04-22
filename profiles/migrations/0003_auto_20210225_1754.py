# Generated by Django 2.2.16 on 2021-02-25 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("profiles", "0002_auto_20200903_1942"),
    ]

    operations = [
        migrations.AlterField(
            model_name="profile",
            name="api_tier",
            field=models.SlugField(
                choices=[
                    ("inactive", "Not Yet Activated"),
                    ("suspended", "Suspended"),
                    ("default", "Default (new user)"),
                    ("legacy", "Legacy"),
                    ("bronze", "Bronze"),
                    ("silver", "Silver"),
                    ("unlimited", "Unlimited"),
                ],
                default="inactive",
            ),
        ),
    ]