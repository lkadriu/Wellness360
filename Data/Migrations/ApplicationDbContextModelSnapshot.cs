﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Wellness360.Data;

#nullable disable

namespace Wellness360.Data.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Wellness360.Models.EmriUshqimit", b =>
                {
                    b.Property<string>("Ushqimi")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Ushqimi");

                    b.ToTable("EmriUshqimit");
                });

            modelBuilder.Entity("Wellness360.Models.KategoriaEUshqimeve", b =>
                {
                    b.Property<string>("Kategoria")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Kategoria");

                    b.ToTable("KategoriaEUshqimeve");
                });

            modelBuilder.Entity("Wellness360.Models.Ushqimii", b =>
                {
                    b.Property<DateTime>("Data")
                        .HasColumnType("datetime2");

                    b.Property<string>("EmriUshqimitUshqimi")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Kategoria")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("KategoriaEUshqimeveKategoria")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Ushqimi")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Data");

                    b.HasIndex("EmriUshqimitUshqimi");

                    b.HasIndex("KategoriaEUshqimeveKategoria");

                    b.ToTable("Ushqimii");
                });

            modelBuilder.Entity("Wellness360.Models.Vrapimi", b =>
                {
                    b.Property<string>("Numri")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("Data")
                        .HasColumnType("datetime2");

                    b.Property<double>("Distanca")
                        .HasColumnType("float");

                    b.Property<int?>("Kalorite")
                        .HasColumnType("int");

                    b.Property<int>("Koha")
                        .HasColumnType("int");

                    b.Property<double>("ShpejtesiaMesatare")
                        .HasColumnType("float");

                    b.HasKey("Numri");

                    b.ToTable("Vrapimi");
                });

            modelBuilder.Entity("Wellness360.Models.Ushqimii", b =>
                {
                    b.HasOne("Wellness360.Models.EmriUshqimit", "EmriUshqimit")
                        .WithMany()
                        .HasForeignKey("EmriUshqimitUshqimi");

                    b.HasOne("Wellness360.Models.KategoriaEUshqimeve", "KategoriaEUshqimeve")
                        .WithMany()
                        .HasForeignKey("KategoriaEUshqimeveKategoria");

                    b.Navigation("EmriUshqimit");

                    b.Navigation("KategoriaEUshqimeve");
                });
#pragma warning restore 612, 618
        }
    }
}